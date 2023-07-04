import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFocusEffect } from '@react-navigation/native';


import Navbar from './Navbar';
import Auth from './components/Auth';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Stack = createNativeStackNavigator();

  const handleSignIn = () => {
    // Perform sign-in logic using the email and password
    console.log('Sign in:', email, password);
    setEmail('')
    setPassword('')
  };

  return (
    <View>
      <Text>Auth</Text>
    </View>
  );
}

  // Tried to use this to autohide status bar
  // useFocusEffect(useCallback(() => {
  //   // This will run when screen is `focused` or mounted.
  //   StatusBar.setHidden(true);
  
  //   // This will run when screen is `blured` or unmounted.
  //   return () => {
  //     StatusBar.setHidden(false);
  //   }
  // }, []));
const handleButtonPress = () => {
  // Action to perform when the button is pressed
  console.log('Button pressed!');
};

//should we make a dedicated css stylesheet?
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
