import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Expenses as ExpensesScreen } from "../screens/tabs";
import { ExpensesParamList } from "../types";

const ExpensesStack = createStackNavigator<ExpensesParamList>();

const ExpensesNavigator = () => {
  return (
    <ExpensesStack.Navigator>
      <ExpensesStack.Screen
        name="Expenses"
        component={ExpensesScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </ExpensesStack.Navigator>
  );
};

export default ExpensesNavigator;
