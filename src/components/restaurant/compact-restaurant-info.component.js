import { View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Text } from "../typography/Text";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";
import { Spacer } from "../spacer/spacer";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  object-fit: cover;
`;
const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 150px;
  align-items: center;
  width: 100%;
`;

const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
};
