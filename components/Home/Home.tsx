import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-elements";

export function Home({ onSignOutPress }: any) {
  return (
    <View>
      <Text h3>Home sweet home</Text>
      <Button onPress={() => onSignOutPress()} title="Sign out"></Button>
    </View>
  );
}
