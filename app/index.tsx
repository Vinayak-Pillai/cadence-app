import { View } from "react-native";
import { Header } from "@shared/components/header";
import { HelloMessage } from "@home/components/hello-message";
import { homeStyles } from "@home/styling/home-styles";
import { useTheme } from "@/shared/components/theme-context";

export default function HomeScreen() {
  const { colors } = useTheme();
  const styles = homeStyles(colors);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <HelloMessage />
      </View>
    </View>
  );
}
