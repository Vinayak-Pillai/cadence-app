import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IconSunMoon } from "@tabler/icons-react-native";
import { headerStyles } from "@shared/styling/header-styles";
import { useTheme } from "@shared/components/theme-context";
import { useThemeStyles } from "@/shared/hooks/use-theme-styles";

export const Header: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { colors, toggleTheme } = useTheme();
  const styles = useThemeStyles(headerStyles);

  return (
    <View style={[styles.container, { paddingTop: Math.max(insets.top, 14) }]}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Cadence</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Toggle theme"
          style={styles.themeButton}
          onPress={toggleTheme}
          activeOpacity={0.7}
        >
          <IconSunMoon size={22} color={colors.ink} strokeWidth={1.8} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
