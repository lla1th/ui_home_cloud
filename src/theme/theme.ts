import { MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
});

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#3478f6',
    onPrimary: '#ffffff',
    background: '#f7f8fb',
    surface: '#ffffff',
    text: '#111827',
    error: '#d9534f',
  },
};
