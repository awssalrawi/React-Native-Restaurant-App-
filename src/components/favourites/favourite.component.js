import { TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const FavouriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: #20232a;
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 999;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find(
    (res) => res.placeId === restaurant.placeId
  );
  return (
    <FavouriteButton
      onPress={() => {
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant);
      }}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color="red"
      />
    </FavouriteButton>
  );
};
