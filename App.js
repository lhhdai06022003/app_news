import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContext,AppContextProvider } from './src/ASM_React/AppContext';
import AppNavigator from './src/ASM_React/AppNavigator';



const stack = createNativeStackNavigator();
const App = () => {
  return(
    
    <AppContextProvider>
      <NavigationContainer>
           <AppNavigator />
        </NavigationContainer>
    </AppContextProvider>

    // <NavigationContainer>
    //   <stack.Navigator screenOptions={{headerShown:false}} initialRouteName='CreaAccount'>
    //     <stack.Screen name="CreateAccount" component={CreaAccount} />
    //     <stack.Screen name="Explore" component={Explore} />
    // </stack.Navigator>
    // </NavigationContainer>
    
     
)
};

export default App;


