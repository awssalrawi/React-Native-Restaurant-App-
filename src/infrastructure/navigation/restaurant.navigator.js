import React from "react";
// import {
//   createStackNavigator,
//   TransitionPresets,
// } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantsScreen from "../../features/restaurant/screens/RestaurantsScreen";
import { RestaurantDetailScreen } from "../../features/restaurant/screens/restaurant-info.screen";
const RestaurantStack = createNativeStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      // headerMode="none"
      // screenOptions={{
      //   ...TransitionPresets.ModalSlideFromBottomIOS,
      // }}
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
        // presentation: "modal",
        // swipeEnabled: true,
        // swipeEnabled: true,
      }}
    >
      <RestaurantStack.Screen name="home" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
