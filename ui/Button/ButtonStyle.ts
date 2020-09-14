import { StyleSheet } from "react-native";
import ThemeColors from "../../theme/variables";
export const styles = StyleSheet.create({
  appButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    borderRadius: 22,
    backgroundColor: ThemeColors.primary,
    paddingHorizontal: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  appButtonDisabled: {},
});
