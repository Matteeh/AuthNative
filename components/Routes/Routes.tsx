import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Route } from "react-router-native";
import { PrivateRoute } from "./PrivateRoute";
import Home from "../Home";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { auth } from "../../helpers/api/auth";

export function Routes(props: any) {
  const [tokenIsSet, setTokenIsSet] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("accessToken").then((token) => {
      if (token) {
        setTokenIsSet(true);
      }
    });
  }, []);

  const handelSignUp = async (email: string, password: string) => {
    try {
      const token = await auth.signUp(email, password);
      await AsyncStorage.setItem("accessToken", token);
      setTokenIsSet(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handelSignIn = async (email: string, password: string) => {
    try {
      const token = await auth.signIn(email, password);
      await AsyncStorage.setItem("accessToken", token);
      setTokenIsSet(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Route path="/sign-up" onSignUpPress="handelSignUp" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <PrivateRoute
        path="/"
        isAuthenticated={tokenIsSet}
        component={Home}
        exact
      />
    </View>
  );
}
