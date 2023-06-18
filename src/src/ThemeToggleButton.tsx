import {
  ThemeToggleButtonContainer,
  Front,
  SunIcon,
  Back,
  MoonIcon,
  Box,
} from "./ButtonContainer";
interface ThemeToggleButtonProps {
  currentTheme: string;
  toggleTheme: () => void;
}
export const ThemeToggleButton = ({
  currentTheme,
  toggleTheme,
}: ThemeToggleButtonProps) => {
  return (
    <ThemeToggleButtonContainer className={currentTheme} onClick={toggleTheme}>
      <Box>
        <Front>
          <SunIcon size={32} />
        </Front>
        <Back>
          <MoonIcon size={18} />
        </Back>
      </Box>
    </ThemeToggleButtonContainer>
  );
};
