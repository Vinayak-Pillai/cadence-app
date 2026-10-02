import React from "react";
import { View, Text } from "react-native";
import { helloMessageStyles } from "@home/styling/hello-message-styles";
import { useThemeStyles } from "@/shared/hooks/use-theme-styles";

export interface HelloMessageProps {
  name?: string;
}

export const HelloMessage: React.FC<HelloMessageProps> = ({
  name = "there",
}) => {
  const styles = useThemeStyles(helloMessageStyles);

  return (
    <View style={styles.card}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Welcome</Text>
      </View>
      <Text style={styles.title}>Hello, {name}!</Text>
      <Text style={styles.description}>
        Welcome to Cadence. Your offline-first SQLite database is ready with
        Drizzle ORM.
      </Text>
    </View>
  );
};
