import { ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/Text";
const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="bottom" size="small">
        <Text variant="label">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((res) => (
          <Spacer position="left" size="medium" key={res.name}>
            <TouchableOpacity
              onPress={() =>
                onNavigate("RestaurantDetails", { restaurant: res })
              }
            >
              <CompactRestaurantInfo restaurant={res} isMap={false} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};
