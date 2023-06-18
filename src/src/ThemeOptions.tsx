import { SrOnly, ThemeOptionsContainer } from "./ButtonContainer";
import { themeOptions } from "./styles/themes/themeOptions";
import { ThemeColors } from "./styles/themes/utilsTheme";
interface ThemeToggleButtonProps {
  currentTheme: ThemeColors;
  handleThemeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const ThemeOptions = ({
  currentTheme,
  handleThemeChange,
}: ThemeToggleButtonProps) => {
  return (
    <ThemeOptionsContainer>
      <SrOnly htmlFor="theme-select">Select Theme:</SrOnly>
      <select
        id="theme-select"
        value={
          themeOptions.find((option) => option.theme === currentTheme)?.name
        }
        onChange={handleThemeChange}
      >
        {themeOptions.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </ThemeOptionsContainer>
  );
};
