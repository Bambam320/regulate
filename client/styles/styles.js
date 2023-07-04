import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 15,
    backgroundColor: 'hsla(330, 1%, 43%, 1)'
  },
  menuButtonContainer: {
    position: "absolute",
    top: 8,
    left: 16,
  },
  menuButton: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  userButtonContainer: {
    position: "absolute",
    top: 8,
    right: 16,
  },
  userButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  userIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  menuModal: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  menu: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 0,
    marginBottom: "auto",
    alignItems: "center", // Align items to center horizontally
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 8,
  },
});
