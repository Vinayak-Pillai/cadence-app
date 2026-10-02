import { StyleSheet } from "react-native";
import { ColorPalette, theme } from "@shared/styling/theme";

export const helloMessageStyles = (colors: ColorPalette) => {
  return StyleSheet.create({
    card: {
      backgroundColor: colors.panel,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.rule,
      padding: 24,
      marginHorizontal: 20,
      marginVertical: 16,
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 2,
    },
    badge: {
      alignSelf: "flex-start",
      backgroundColor: colors.wash,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 6,
      marginBottom: 12,
    },
    badgeText: {
      fontFamily: theme.typography.fontMono,
      fontSize: 12,
      color: colors.ink2,
      letterSpacing: 0.5,
      textTransform: "uppercase",
    },
    title: {
      fontFamily: theme.typography.fontSerif,
      fontSize: 28,
      fontWeight: "600",
      color: colors.ink,
      marginBottom: 8,
    },
    description: {
      fontFamily: theme.typography.fontSans,
      fontSize: 15,
      lineHeight: 22,
      color: colors.ink2,
    },
  });
};
