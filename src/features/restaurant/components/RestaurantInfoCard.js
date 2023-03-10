import { View } from "react-native";
// import styled from "styled-components/native";
import React from "react";
// import { Avatar, Button, Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import storeOpen from "../../../../assets/storeOpen";
import { Spacer } from "../../../components/spacer/spacer";
import { Text } from "../../../components/typography/Text";
import {
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
  Icon,
  Address,
  Rating,
  Info,
} from "./RestuarantInfoCardStyles";
import { Favourite } from "../../../components/favourites/favourite.component";
// const Info = styled(View)`
//   padding: ${(props) => props.theme.space[3]};
// `;
// const Rating = styled(View)`
//   flex-direction: row;
//   padding-top: ${(props) => props.theme.space[2]};
//   padding-bottom: ${(props) => props.theme.space[2]};
// `;

// const Address = styled(Text)`
//   font-family: ${(props) => props.theme.fonts.body};
//   font-size: ${(props) => props.theme.fontSizes.body};
//   font-weight: ${(props) => props.theme.fontWeights.medium};
// `;
// const Title = styled.Text`
//   font-size: ${(props) => props.theme.fontSizes.title};
//   font-family: ${(props) => props.theme.fonts.heading};
//   color: ${(props) => props.theme.colors.ui.primary};
//   font-weight: ${(props) => props.theme.fontWeights.medium};
// `;

// const RestaurantCard = styled(Card)`
//   background-color: ${(props) => props.theme.colors.bg.primary};
// `;
// const RestaurantCardCover = styled(Card.Cover)`
//   background-color: ${(props) => props.theme.colors.bg.primary};
//   padding: ${(props) => props.theme.space[3]};
// `;

// const Section = styled(View)`
//   flex-direction: row;
//   justify-content: space-between;
// `;

// const SectionEnd = styled.View`
//   flex: 1;
//   flex-direction: row;
//   justify-content: flex-end;
// `;
// const Icon = styled(Image)`
//   width: 15px;
//   height: 15px;
// `;
const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://i.pinimg.com/originals/b0/b5/38/b0b538bebec1c589cdec8c85011777d8.jpg",
      "https://cdn.karar.com/news/1359365.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    // <RestaurantCard style={styles.card} elevation={5}>
    //   <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
    //   <Info>
    //     <Title>{name}</Title>
    //     <Section>
    //       <Rating>
    //         {ratingArry.map((index) => (
    //           <SvgXml xml={star} width={20} height={20} key={index} />
    //         ))}
    //       </Rating>
    //       {isOpenNow && <SvgXml xml={storeOpen} width={20} height={20} />}
    //     </Section>
    //     <Address>{address}</Address>
    //   </Info>
    // </RestaurantCard>
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((info, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={storeOpen} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
