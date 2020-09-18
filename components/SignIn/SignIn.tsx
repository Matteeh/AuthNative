import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Input, Text } from "react-native-elements";
import { Link } from "react-router-native";

export function SignIn({ onSignInPress }: any) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  return (
    <Card containerStyle={styles.card}>
      <Card.Title>Sign in</Card.Title>
      <Card.Divider />
      <Input
        leftIconContainerStyle={styles.icon}
        placeholder="Email@address.com"
        leftIcon={{
          type: "font-awesome",
          name: "envelope",
          color: "grey",
        }}
        onChangeText={(value) => setEnteredEmail(value)}
      />
      <Input
        leftIconContainerStyle={styles.icon}
        placeholder="Password"
        leftIcon={{ type: "font-awesome", name: "lock", color: "grey" }}
        secureTextEntry={true}
        onChangeText={(value) => setEnteredPassword(value)}
      />
      <Button
        title="Sign in"
        onPress={() => onSignInPress(enteredEmail, enteredPassword)}
      ></Button>
      <View style={styles.signUpContainer}>
        <Text>New here ? </Text>
        <Link to="/sign-up" underlayColor="blue">
          <Text style={styles.signUpText}>Sign up</Text>
        </Link>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 320,
    height: 320,
  },
  icon: {
    marginRight: 6,
    color: "red",
  },
  signUpContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 12,
    flexDirection: "row",
  },
  signUpText: {
    color: "#3f9be3",
    fontWeight: "bold",
  },
});
