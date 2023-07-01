import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from "react-native";
import GreyBackground from '../../styles/GreyBackground';

export default function JournalHome() {
  return (
    <GreyBackground>
      <View style={styles.container}>
        <Text>Journal Home - What to add What to add</Text>
      
      </View>

    </GreyBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'column'
  },
});
