import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "../navigation/account.navigator";
export const Navigation = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const { user } = authenticationContext;
  return (
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
