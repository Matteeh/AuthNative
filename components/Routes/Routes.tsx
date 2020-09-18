import React from "react";
import { View } from "react-native";
import { Route } from "react-router-native";
import { PrivateRoute } from "./PrivateRoute";
import Home from "../Home";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

export function Routes(props: any) {
  return (
    <View>
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <PrivateRoute path="/" component={Home} exact />
    </View>
  );
}
