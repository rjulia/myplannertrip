import React from "react";
import { Text, SafeAreaView } from "react-native";
import { styles } from "./SelectTravelStyles";

const SelectTravelView = () => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Select Travel</Text>
    </SafeAreaView>
  );
};

export default SelectTravelView;
