import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Info as InfoScreen } from "../screens/tabs";
import { InfoParamList } from "../types";

const InfoStack = createStackNavigator<InfoParamList>();

const InfoNavigator = () => {
  return (
    <InfoStack.Navigator>
      <InfoStack.Screen
        name="Info"
        component={InfoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </InfoStack.Navigator>
  );
};

export default InfoNavigator;
