import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useColorScheme } from "react-native";
import { ColorPalette, darkColors, lightColors } from "@shared/styling/theme";

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
  const [manualTheme, setManualTheme] = useState<ThemeMode | null>(null);

  const activeTheme: ThemeMode =
    manualTheme ?? (systemColorScheme === "dark" ? "dark" : "light");

  const toggleTheme = useCallback(() => {
    setManualTheme(activeTheme === "light" ? "dark" : "light");
  }, [activeTheme]);

  const setTheme = useCallback((newTheme: ThemeMode) => {
    setManualTheme(newTheme);
  }, []);

  const colors = useMemo(
    () => (activeTheme === "dark" ? darkColors : lightColors),
    [activeTheme],
  );

  const isDark = activeTheme === "dark";

  const value = useMemo(
    () => ({
      theme: activeTheme,
      colors,
      isDark,
      toggleTheme,
      setTheme,
    }),
    [activeTheme, colors, isDark, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
