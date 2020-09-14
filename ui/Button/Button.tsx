import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./ButtonStyle";

type ButtonProps = {
  title: string;
  handlePress: any;
  styleOverider?: object;
  isDisabled?: boolean;
};
const Button = ({
  title,
  handlePress,
  styleOverider,
  isDisabled,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.appButtonContainer,
        isDisabled && styles.appButtonDisabled,
      ]}
      disabled={isDisabled}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
