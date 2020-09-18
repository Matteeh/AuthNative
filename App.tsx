import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider, Text } from "react-native-elements";
import { NativeRouter, Route, Link } from "react-router-native";
import { Routes } from "./components/Routes/Routes";

export default function App() {
  return (
    <NativeRouter>
      <ThemeProvider>
        <View style={styles.container}>
          <Routes />
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
