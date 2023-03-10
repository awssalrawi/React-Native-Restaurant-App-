import { StatusBar } from "react-native";
import styled from "styled-components/native";
import SafeAreaView from "react-native-safe-area-view";
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight - 10}px`};
  color: #fff;
`;
// margin-top: ${StatusBar.currentHeight}px;
