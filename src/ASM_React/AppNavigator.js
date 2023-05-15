import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import Login from './Login'
import Register from './Register'
import DetailNew from './DetailNew'
import BottomTabNavigator from './TabNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContext,AppContextProvider } from './AppContext'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from './HomePage'
import Profile from './Profile'
import ListNews from './ListNews'
import PostNew from './PostNew'
import ChangePass from './ChangePass'
import MyListNews from './MyListNews'

const stack = createNativeStackNavigator();
const User = () => {
    return(
        <stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login'>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Register" component={Register} />
        <stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </stack.Navigator>
    )
} 
const New = () => {
  return(
      <stack.Navigator screenOptions={{headerShown:false}}>
      <stack.Screen name="HomePage" component={HomePage} />
      <stack.Screen name="ListNews" component={ListNews} />
      <stack.Screen name="DetailNew" component={DetailNew} />
      
  </stack.Navigator>
  )
} 
const UpdateProfile = () => {
  return(
    <stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Profile'>
    <stack.Screen name="Profile" component={Profile} />
    <stack.Screen name="ChangePass" component={ChangePass} />
    <stack.Screen name="Login" component={Login} />
    
</stack.Navigator>
      
  
  )
} 


const Tab = createBottomTabNavigator();
const Main = () => {
    return(
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          
          let iconName;
          if (route.name === 'New') {
            iconName = focused
              ? 'home-sharp'
              : 'home-sharp';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }else if (route.name === 'Bookmark') {
            iconName = focused ? 'bookmark' : 'bookmark';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'md-person-circle-sharp' : 'md-person-circle-sharp';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
      >
      <Tab.Screen name="New" component={New} options={{title:"HomePage"}}/>
      <Tab.Screen name="Explore" component={PostNew} options={{title:"Explore"}}/>
      <Tab.Screen name="Bookmark"  component={MyListNews} options={{title:"Bookmark"}}/>
      <Tab.Screen name="Profile"  component={UpdateProfile} options={{title:"Profile"}}/>
      
      
    </Tab.Navigator>
    )
} 

const AppNavigator = () => {
    const {isLogin} = useContext(AppContext);
  return (
    <>
        {
            isLogin == false ? <User/> : <Main/>
        }
    </>
  );
}

export default AppNavigator