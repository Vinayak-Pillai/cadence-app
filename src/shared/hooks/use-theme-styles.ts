import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@shared/components/theme-context';
import { ColorPalette } from '@shared/styling/theme';

export function useThemeStyles<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
  factory: (colors: ColorPalette) => T
): T {
  const { colors } = useTheme();
  return useMemo(() => factory(colors), [colors, factory]);
}
