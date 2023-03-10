import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { Platform } from "react-native";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  ${Platform.OS === "ios"
    ? `margin-top: ${(props) => props.theme.space[4]}`
    : "margin-top:0"}
`;
// margin-top: ${(props) => props.theme.space[4]};
const StyledSearchBar = styled(Searchbar)`
  background-color: #fff;
`;
export const Search = ({ favouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  // useEffect(() => {
  //   search(searchKeyword);
  // }, []);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <StyledSearchBar
        icon={favouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
