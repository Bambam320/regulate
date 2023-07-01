//functional imports
import React from 'react';
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GreyBackground from '../styles/GreyBackground';

//component imports
import WelcomeUser from './WelcomeUser'
import MeditationHome from './Meditation/MeditationHome'
import JournalHome from './Journal/JournalHome'

export default function AppScreens() {
  //stack navigator
  const Stack = createNativeStackNavigator();


  return (
    
    <Stack.Navigator screenOptions={{ 
      headerShown: false, 
      cardStyle: {
        backgroundColor: "transparent",
      },
    }}>
      <Stack.Screen name="WelcomeUser" component={WelcomeUser} />
      <Stack.Screen name="MeditationHome" component={MeditationHome} />
      <Stack.Screen name="JournalHome" component={JournalHome} />
    </Stack.Navigator>
  );
};
{/* <View style={styles.container}> */}
{/* </View> */}

