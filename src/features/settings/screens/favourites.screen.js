import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { SafeArea } from "../../../components/utility/SafeAreaView";
import { Text } from "../../../components/typography/Text";
import { Spacer } from "../../../components/spacer/spacer";

import { RestaurantList } from "../../restaurant/components/restaurant-list.styles";
import RestaurantInfoCard from "../../restaurant/components/RestaurantInfoCard";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
