import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderColor: "#000",
    borderWidth: 1,
    height: "100%",
  },
  darkContainer: {
    backgroundColor: "#000",
    color: "#fff",
  },
  lightContainer: {
    backgroundColor: "#fff",
    color: "#000",
  },
  content: {
    width: 500,
    marginStart: "auto",
    marginEnd: "auto",
    borderColor: "red",
    borderWidth: 1,
    height: "100%",
  },

  darkContent: {},
  lightContent: {},
  text: {
    fontSize: 16,
  },
  lightThemeText: {
    color: "#000",
  },
  darkThemeText: {
    color: "#fff",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    padding: 10,
    maxWidth: 500,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginEnd: 20,
  },
});
