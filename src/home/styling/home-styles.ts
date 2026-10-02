import { StyleSheet } from "react-native";
import { ColorPalette } from "@shared/styling/theme";

export const homeStyles = (colors: ColorPalette) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.paper,
    },
    content: {
      flex: 1,
      paddingTop: 12,
    },
  });
};
