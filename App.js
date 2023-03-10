import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStat } from "expo-status-bar";
import { StyleSheet, StatusBar } from "react-native";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

// import { restaurantRequest } from "./src/services/restaurant/restaurantsServices";
import { Navigation } from "./src/infrastructure/navigation";
import { DefaultTheme } from "@react-navigation/native";
// import { RestaurantsContextProvider } from "./src/services/restaurant/RestaurantsContext";
// import { LocationContextProvider } from "./src/services/location/location.context";
// import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

//import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { auth } from "./src/services/firebaseConfig";

const navTheme = DefaultTheme;
navTheme.colors.background = "#fff";

//*include fireBase

// const firebaseConfig = {
//   apiKey: "AIzaSyAzlY091r0Ih8eCt0L2GPIDDMh3h-Rq5F8",
//   authDomain: "mealstogo-f520c.firebaseapp.com",
//   projectId: "mealstogo-f520c",
//   storageBucket: "mealstogo-f520c.appspot.com",
//   messagingSenderId: "1092909165400",
//   appId: "1:1092909165400:web:532c140027a955b1c7132d",
// };
// try {
//   const app = initializeApp(firebaseConfig);
//   getAuth(app);
// } catch (error) {
//   console.log(error);
// }

// if (firebase.app.length === 0) {
//   const app = initializeApp(firebaseConfig);
//   getAuth(app);
// }
// app();
// initialFirebase();
export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });
  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!LatoLoaded || !oswaldLoaded) {
    return null;
  }
  // restaurantRequest();

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStat style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    marginTop: StatusBar.currentHeight,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  searchBarContainer: {
    padding: 5,
  },
  lists: {
    flex: 1,
    backgroundColor: "#ee3",
  },
});
