//functional imports
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//component imports
import Welcome from './Welcome';
import Login from './Login';
import Signup from './Signup';

export default function AuthScreens() {
  //stack navigator
  const Stack = createNativeStackNavigator();
  
  return (
    <Stack.Navigator screenOptions={{ 
      headerShown: false, 
      cardStyle: {
        backgroundColor: "transparent",
      },
    }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};