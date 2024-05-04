import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { styles } from "../styles";

export default function AText(props) {
  const { children, style } = props;
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;

  return <Text style={[style, styles.text, themeTextStyle]}>{children}</Text>;
}
