import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { themes } from "./styles/themes/themes";

import { ThemeColors } from "./styles/themes/utilsTheme";
import { themeOptions } from "./styles/themes/themeOptions";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { ThemeOptions } from "./ThemeOptions";
const { customTheme, darkTheme, defaultTheme } = themes;
const getSavedTheme = (): ThemeColors => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "dark"
    ? darkTheme
    : savedTheme === "custom"
    ? customTheme
    : defaultTheme;
};

export function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeColors>(
    getSavedTheme()
  );

  const toggleTheme = (): void => {
    const themes = themeOptions.map((option) => option.theme);
    const currentThemeIndex = themes.findIndex(
      (theme) => theme === currentTheme
    );
    const newTheme = themes[(currentThemeIndex + 1) % themes.length];
    setCurrentTheme(newTheme);
    localStorage.setItem(
      "theme",
      newTheme === darkTheme
        ? "dark"
        : newTheme === customTheme
        ? "custom"
        : "light"
    );
  };

  useEffect(() => {
    const savedTheme = getSavedTheme();
    setCurrentTheme(savedTheme);
  }, []);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedTheme = themeOptions.find(
      (option) => option.name === e.target.value
    )?.theme;
    if (selectedTheme) {
      setCurrentTheme(selectedTheme);
      localStorage.setItem(
        "theme",
        selectedTheme === darkTheme
          ? "dark"
          : selectedTheme === customTheme
          ? "custom"
          : "light"
      );
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyle />
        <div>
          <h1>Themed App</h1>
          <p>This is some text in the app.</p>
          <ThemeToggleButton
            currentTheme={currentTheme === darkTheme ? "dark" : ""}
            toggleTheme={toggleTheme}
          />
          <ThemeOptions
            currentTheme={currentTheme}
            handleThemeChange={handleThemeChange}
          />
        </div>
      </>
    </ThemeProvider>
  );
}
