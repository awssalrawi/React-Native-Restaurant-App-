import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Searchbar, ActivityIndicator, MD2Colors } from "react-native-paper";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import styled from "styled-components/native";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeArea } from "../../../components/utility/SafeAreaView";
import { RestaurantsContext } from "../../../services/restaurant/RestaurantsContext";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Spacer } from "../../../components/spacer/spacer";
import { Search } from "../components/search.component";
import { FavouriteBar } from "../../../components/favourites/favourite-bar.component";
import { FadeInView } from "../../../components/animations/fade.animation";
// const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   margin-top: ${StatusBar.currentHeight}px;
// `;
const SearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  background-color: #fff;
`;

// const RestaurantList = styled(FlatList).attrs({
//   contentContainerStyle: {
//     padding: 16,
//   },
// })``;
import { RestaurantList } from "../components/restaurant-list.styles";
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 20;
`;
const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={MD2Colors.red800} />
          </LoadingContainer>
        )}
        <Search
          favouritesToggled={isToggled}
          onFavouritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && (
          <FavouriteBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}
        <RestaurantListContainer>
          <RestaurantList
            initialNumToRender={7}
            data={restaurants}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetails", { restaurant: item })
                }
              >
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
          />
        </RestaurantListContainer>
      </SafeArea>
    </SafeAreaProvider>
  );
};

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
export default RestaurantsScreen;
