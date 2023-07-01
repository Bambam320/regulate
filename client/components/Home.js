// functional imports
import React, { useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { View, TouchableOpacity, Button, Text, StyleSheet, Image, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

//component imports
import AppScreens from '../app_screens/AppScreens';
import AuthScreens from '../auth_screens/AuthScreens';
import GreyBackground from '../styles/GreyBackground';
import WelcomeUser from '../app_screens/WelcomeUser';

//screen toggle is just for viewing auth or app screens
//need to implement redux store and loading or home screen while user is being loaded

const RegulateTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'hsla(0, 0%, 0%, 0)'
  }
}

function Home() {
  //set to true for appscreens and false for authscreens
  const [screenToggle, setScreenToggle] = useState(true);
  console.log('theme from home component', DefaultTheme)
  // will probably need NativeBase to provide a theme throughout the app
  return (
    <NavigationContainer theme={RegulateTheme}>
      {screenToggle ? <AppScreens /> : <AuthScreens />}
    </NavigationContainer>
  );
};

export default Home;

{/* 
  <Text style={{ fontSize: 24, color: '#FFF' }}>Radial Gradient Background</Text>
</View> */}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'hsla(45, 90%, 46%, 1)'
  },
});