import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import GreyBackground from '../styles/GreyBackground';

const LoginButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} >
    <LinearGradient
      colors={['hsla(55, 100%, 38%, 1)', 'hsla(245, 100%, 51%, 1)']}
      style={styles.buttons}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>

<View style={styles.textContainer}>
          <Text style={styles.text}>Enter your login information below</Text>
        </View>
        <View style={styles.buttonContainer}>
          <LoginButton title="Login" onPress={() => navigation.navigate('Signup')} />
        </View>

      <Text> Login </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
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
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  buttons: {
    elevation: 8,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 3,
    borderColor: 'hsla(0, 0%, 18%, 1)'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
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
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  }
});