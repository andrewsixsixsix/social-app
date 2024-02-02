import { Appearance } from 'react-native';
import { createTheming } from '@callstack/react-theme-provider';

import { colors } from './colors';
import { Theme } from '@types';

const theme = {
  light: {
    background: colors.white,
    primary: colors.black,
    text: colors.black,
  },
  dark: {
    background: colors.black,
    primary: colors.white,
    text: colors.white,
  },
};

const defaultTheme: Theme = theme[Appearance.getColorScheme() ?? 'light'];

export const { ThemeProvider, useTheme } = createTheming(defaultTheme);
