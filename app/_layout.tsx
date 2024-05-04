import { Link, Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useNostrHooks, useNip07, useActiveUser } from "nostr-hooks";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { styles } from "../styles";
import AText from "../Components/AText";

function Nav() {
  return (
    <View style={styles.nav}>
      <AText style={styles.h1}>Almanac</AText>
      <AText style={{ display: "flex", gap: 10 }}>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
      </AText>
    </View>
  );
}

export default function MainLayout() {
  useNostrHooks();
  useNip07();

  const { activeUser } = useActiveUser();
  const [showApp, setShowApp] = useState(false);

  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContentStyle =
    colorScheme === "light" ? styles.lightContent : styles.darkContent;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  useEffect(() => {
    setTimeout(() => {
      setShowApp(true);
    }, 2000);
  }, [activeUser]);

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <View style={styles.content}>
        <Nav />
        {showApp ? (
          <Slot />
        ) : activeUser ? (
          <AText>{`Logged in as ${activeUser.profile.name}`}</AText>
        ) : (
          <AText>Loading...</AText>
        )}
      </View>
    </View>
  );
}
