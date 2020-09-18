import React, { Component } from "react";
import { Route, Redirect } from "react-router-native";

export function PrivateRoute({ component: Component, ...rest }: any) {
  const isAuthenticated = false;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
