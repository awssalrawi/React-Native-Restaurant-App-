import React, { useRef, useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { SafeArea } from "../../../components/utility/SafeAreaView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <SafeArea>
      <Camera
        type={type}
        style={{ height: "100%", width: "100%", padding: 20, marginTop: 10 }}
        ref={(camera) => (cameraRef.current = camera)}
      >
        <View>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <Text
              style={{ color: "white", fontSize: 30, backgroundColor: "red" }}
            >
              Flip
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={snap}>
            <Text
              style={{ color: "white", fontSize: 30, backgroundColor: "red" }}
            >
              Take Picture
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </SafeArea>
  );
};
