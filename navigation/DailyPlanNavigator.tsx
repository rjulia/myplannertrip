import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DailyPlan as DailyPlanScreen } from "../screens/tabs";
import { DailyPlanParamList } from "../types";

const DailyPlanStack = createStackNavigator<DailyPlanParamList>();

const DailyPlanNavigator = () => {
  return (
    <DailyPlanStack.Navigator>
      <DailyPlanStack.Screen
        name="DailyPlan"
        component={DailyPlanScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </DailyPlanStack.Navigator>
  );
};

export default DailyPlanNavigator;
