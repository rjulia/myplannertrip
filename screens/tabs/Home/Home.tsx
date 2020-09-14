import * as React from "react";
import { Asset } from "expo-asset";
import { Text, View } from "../../../components/Themed";
import { styles } from "./HomeStyles";
import { Button } from "../../../ui";
import { ImageBackground } from "react-native";

export default function Home({ navigation }: any) {
  const imageURI = Asset.fromModule(require("../../../assets/images/home.jpg"))
    .uri;

  console.log(imageURI);
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imageURI }} style={styles.image}>
        <Button
          title="Create Travel"
          handlePress={() => navigation.navigate("CreateTravel")}
        />
        <Button
          title="Select Travel"
          handlePress={() => navigation.navigate("SelectTravel")}
        />
      </ImageBackground>
    </View>
  );
}
