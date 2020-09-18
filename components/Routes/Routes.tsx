import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Route, useHistory } from "react-router-native";
import { PrivateRoute } from "./PrivateRoute";
import Home from "../Home";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { auth } from "../../helpers/api/auth";

export function Routes(props: any) {
  const [tokenIsSet, setTokenIsSet] = useState(false);
  const history = useHistory();

  useEffect(() => {
    AsyncStorage.getItem("accessToken").then((token) => {
      if (token) {
        setTokenIsSet(true);
      }
    });
  }, []);

  const handleSignUp = async (
    email: string,
    password: string
  ): Promise<any> => {
    try {
      const token = await auth.signUp(email, password);
      await AsyncStorage.setItem("accessToken", token);
      history.push("/");
      setTokenIsSet(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async (
    email: string,
    password: string
  ): Promise<any> => {
    try {
      const token = await auth.signIn(email, password);
      await AsyncStorage.setItem("accessToken", token);
      history.push("/");
      setTokenIsSet(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async (): Promise<any> => {
    try {
      await AsyncStorage.removeItem("accessToken");
      setTokenIsSet(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Route
        path="/sign-up"
        component={() => <SignUp onSignUpPress={handleSignUp} />}
      />
      <Route
        path="/sign-in"
        component={() => <SignIn onSignInPress={handleSignIn} />}
      />
      <PrivateRoute
        path="/"
        isAuthenticated={tokenIsSet}
        component={() => <Home onSignOutPress={handleSignOut} />}
        exact
      />
    </View>
  );
}
