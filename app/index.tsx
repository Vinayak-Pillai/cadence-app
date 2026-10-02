import { View } from "react-native";
import { Header } from "@shared/components/header";
import { HelloMessage } from "@home/components/hello-message";
import { homeStyles } from "@home/styling/home-styles";
import { useThemeStyles } from "@/shared/hooks/use-theme-styles";

export default function HomeScreen() {
  const styles = useThemeStyles(homeStyles);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <HelloMessage />
      </View>
    </View>
  );
}
