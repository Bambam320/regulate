import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Modal from "react-native-modal";
import { styles } from "../styles.styles";

const NavbarWithMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleUserPress = () => {
    console.log("user pressed");

    // have state variable which toggles showing of a second separate modal for user info, including history and account
  };

  const handleMenuItemPress = () => {
    // Action to perform when a menu item is pressed
    console.log("Menu item pressed!");
  };

  return (
    <View style={styles.navContainer}>
      {/* how to create space below the top cell phone info menu bar? */}
      <TouchableOpacity
        onPress={handleMenuToggle}
        style={styles.menuButtonContainer}
      >
        <Image
          source={require("client/assets/menu.png")} // Replace with your menu icon image
          style={styles.menuButton}
        />
      </TouchableOpacity>
      {/* find a way to make space, separating both buttons to upper corners */}
      <TouchableOpacity
        onPress={handleUserPress}
        style={styles.userButtonContainer}
      >
        <View style={styles.userButton}>
          <Image
            source={require("client/assets/240px-Dharma_wheel.png")} // Replace with your user icon image
            style={styles.userIcon}
          />
        </View>
      </TouchableOpacity>

      <Modal
        visible={isMenuOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={handleMenuToggle}
        onBackdropPress={handleMenuToggle}
        style={styles.menuModal}
      >
        <View style={styles.menu}>
          <TouchableOpacity onPress={handleMenuItemPress}>
            <Text style={styles.menuItem}>Menu Item 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMenuItemPress}>
            <Text style={styles.menuItem}>Menu Item 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMenuItemPress}>
            <Text style={styles.menuItem}>Menu Item 3</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     padding: 8,
//   },
//   menuButton: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'orange',
//   },
//   modal: {
//     justifyContent: 'flex-start',
//     margin: 0,
//   },
//   menu: {
//     backgroundColor: 'transparent',
//     width: '100%',
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     marginTop: 0,
//     marginBottom: 'auto',
//     alignItems: 'center', // Align items to center horizontally
//   },
//   menuButton: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//   },
//   menuItem: {
//     fontSize: 20,
//     paddingVertical: 8,
//     fontWeight: 'bold',
//   },
//   userButton: {
//     width: 24,
//     height: 24,
//     borderRadius: 20,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   userIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//   },
// });

export default NavbarWithMenu;
