import React from "react";
import Home from "../screens/tabs/Home/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { SelectTravel, CreateTravel } from "../screens/tabs/";
import { TabOneParamList } from "../types";

const HomeStack = createStackNavigator<TabOneParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="SelectTravel"
        component={SelectTravel}
        options={{
          title: "Create New Trip",
        }}
      />
      <HomeStack.Screen
        name="CreateTravel"
        component={CreateTravel}
        options={{
          title: "Create New Trip",
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
