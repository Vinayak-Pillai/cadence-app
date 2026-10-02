import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { ColorPalette, darkColors, lightColors, theme } from "../styling/theme";
import { useColorScheme } from "react-native";

export type ThemeMode = "light" | "dark";

interface ThemeContextValue {
  theme: ThemeMode;
  colors: ColorPalette;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeMode>(
    systemColorScheme === "dark" ? "dark" : "light",
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const colors = useMemo(
    () => (theme === "dark" ? darkColors : lightColors),
    [theme],
  );
  const isDark = theme === "dark";

  const value = useMemo(
    () => ({
      theme,
      colors,
      isDark,
      toggleTheme,
      setTheme,
    }),
    [theme, colors, isDark],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
