import React, { useState } from 'react';
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
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });

  const updateLogin = (v, k) => {
    setLoginInfo({...loginInfo, [k]:v})
  }
  
  console.log("login info", loginInfo)
  return (
    <GreyBackground>

      <View style={styles.container}>

        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Enter your login information below</Text>
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.welcomeText}>{`${loginInfo.username ? 'Welcome: ' + loginInfo.username : '' }`}</Text>
          <TextInput
            style={styles.input}
            onChange={(e) => updateLogin(e.target.value, 'username')}
            value={loginInfo.username}
            type='username'
            placeholder="Username"
            textContentType='username'
          />
          <TextInput
            style={styles.input}
            onChange={(e) => updateLogin(e.target.value, 'password')}
            value={loginInfo.password}
            placeholder="Password"
            textContentType='password'
            secureTextEntry= 'true'
          />
        </View>
        <View style={styles.buttonContainer}>
          <LoginButton title="Login" onPress={() => navigation.navigate('Signup')} />
        </View>
      </View>
    </GreyBackground>
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
    // justifyContent: 'space-around',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 6,
    color: 'hsla(45, 90%, 46%, 1)',
    fontFamily: 'RacingSansOne_400Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 4,
    color: 'hsla(45, 90%, 46%, 1)',
    fontFamily: 'RacingSansOne_400Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 10,
  },
  inputContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  input: {
    borderColor: "hsla(129, 100%, 100%, 1)",
    backgroundColor: "hsla(282, 0%, 75%, 1)",
    width: "10rem",
    height: "2rem",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
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
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    fontSize: 28,
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