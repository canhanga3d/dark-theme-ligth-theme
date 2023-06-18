import { darkTheme } from "../styles/themes/darkTheme";
import { defaultTheme } from "../styles/themes/defaultTheme";
import { blueTheme } from "../styles/themes/blueTheme";
import { greenTheme } from "../styles/themes/greenTheme";

const theme = {
  ...darkTheme,
  ...defaultTheme,
  ...blueTheme,
  ...greenTheme,
};

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
