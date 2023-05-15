import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Profile from './Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator,ContactStackNavigator } from './StackNavigator';
import HomePage from './HomePage';


const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
          screenOptions={({ route }) => ({
            headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            
            let iconName;
            if (route.name === 'HomePage') {
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
        <Tab.Screen name="HomePage" component={HomePage} options={{title:"HomePage"}}/>
        <Tab.Screen name="Explore" component={Profile} options={{title:"Explore"}}/>
        <Tab.Screen name="Bookmark"  component={Profile} options={{title:"Bookmark"}}/>
        <Tab.Screen name="Profile"  component={Profile} options={{title:"Profile"}}/>
        
        
      </Tab.Navigator>
  )
}

export default BottomTabNavigator

