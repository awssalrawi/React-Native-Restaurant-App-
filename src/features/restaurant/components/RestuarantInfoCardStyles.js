import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { Avatar, Button, Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;
export const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
