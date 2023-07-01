import React from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet, Image, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import GreyBackground from '../styles/GreyBackground';


const MeditateButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} >
    <LinearGradient
      colors={['hsla(29, 100%, 87%, 1)', 'hsla(29, 100%, 47%, 1)', 'hsla(29, 100%, 47%, 1)']}
      style={styles.buttons}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const JournalButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} >
    <LinearGradient
      colors={['hsla(245, 100%, 81%, 1)', 'hsla(245, 100%, 51%, 1)', 'hsla(245, 100%, 51%, 1)']}
      style={styles.buttons}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
)

export default function WelcomeUser({ navigation }) {
  return (
    <GreyBackground>
      <View style={styles.container}>

        <View style={styles.textContainer}>
          <Text style={styles.text}>Regulate</Text>
        </View>
{/* add bottom nav tabs and back button and menu at top right */}
        <View style={styles.buttonContainer}>
          <MeditateButton title="Meditate" onPress={() => navigation.navigate('MeditationHome')} />
          <JournalButton title="Journal" onPress={() => navigation.navigate('JournalHome')}/>
        </View>
      </View>

    </GreyBackground>

  );
};
//need to place this container style in greybackground, it will
// give this container to all other pages and allow for use of
// the container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'column'
  },
  textContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    fontSize: 69, //hehe
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 6,
    color: 'hsla(45, 90%, 46%, 1)',
    fontFamily: 'RacingSansOne_400Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  },
  buttons: {
    elevation: 8,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 3,
    borderColor: 'hsla(0, 0%, 18%, 1)'
  },
  buttonText: {
    fontSize: 18,
    color: "#hsla(360, 100%, 100%, 0.75)",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily: 'RacingSansOne_400Regular',
    letterSpacing: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  }
});