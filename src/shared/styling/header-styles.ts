import { StyleSheet } from "react-native";
import { ColorPalette, theme } from "@shared/styling/theme";

export const headerStyles = (colors: ColorPalette) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      paddingVertical: 14,
      backgroundColor: colors.paper,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.rule,
    },
    leftContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      fontFamily: theme.typography.fontSerif,
      fontSize: 26,
      fontWeight: "700",
      color: colors.ink,
      letterSpacing: -0.5,
    },
    rightContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    themeButton: {
      padding: 8,
      borderRadius: 8,
      backgroundColor: colors.wash,
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
