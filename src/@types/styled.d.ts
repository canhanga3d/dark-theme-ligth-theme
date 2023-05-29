import { darkTheme } from '../styles/themes/darkTheme';
import { defaultTheme } from '../styles/themes/defaultTheme';

const theme = {
  ...darkTheme,
  ...defaultTheme,
};
type ThemeType = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
