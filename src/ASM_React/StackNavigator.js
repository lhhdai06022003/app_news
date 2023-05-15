import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Login from './Login';
import Register from './Register';
import HomePage from './HomePage';
import DetailNew from './DetailNew';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './TabNavigator';


const stack = createNativeStackNavigator();
const MainStackNavigator = () => {
    
    return(
              <stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login'>
                  <stack.Screen name="Login" component={Login} />
                  <stack.Screen name="Register" component={Register} />
                  <stack.Screen name="HomePage" component={HomePage} />
                  <stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
              </stack.Navigator>
    )
  }
  const ContactStackNavigator = () => {
    return (
      <stack.Navigator screenOptions={{headerShown:false}} >
        <stack.Screen name="Login" component={Login} />
                  <stack.Screen name="Register" component={Register} />
                  <stack.Screen name="HomePage" component={HomePage} />
        <stack.Screen name="DetailNew" component={DetailNew} />
      </stack.Navigator>
    );
  }

  export { MainStackNavigator, ContactStackNavigator };

