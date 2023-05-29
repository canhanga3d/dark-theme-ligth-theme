import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Back,
  Box,
  Front,
  MoonIcon,
  SunIcon,
  ThemeToggleButton,
} from './ButtonContainer';
import { GlobalStyle } from './styles/global';
import { darkTheme } from './styles/themes/darkTheme';
import { defaultTheme } from './styles/themes/defaultTheme';
import { ThemeColors } from './styles/themes/utilsTheme';

// Função para recuperar o tema salvo no localStorage ou tema light como padrão
const getSavedTheme = (): ThemeColors => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'dark' ? darkTheme : defaultTheme;
};

// Componente da aplicação
export function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeColors>(
    getSavedTheme()
  );

  const toggleTheme = (): void => {
    const newTheme = currentTheme === defaultTheme ? darkTheme : defaultTheme;
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme === darkTheme ? 'dark' : 'light');
  };

  // Efeito para verificar e aplicar o tema salvo ao montar o componente
  useEffect(() => {
    const savedTheme = getSavedTheme();
    setCurrentTheme(savedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyle />
        <div>
          <h1>Themed App</h1>
          <p>This is some text in the app.</p>
          <ThemeToggleButton
            className={currentTheme === darkTheme ? 'dark' : ''}
            onClick={toggleTheme}
          >
            <Box>
              <Front>
                <SunIcon size={32} />
              </Front>
              <Back>
                <MoonIcon size={18} />
              </Back>
            </Box>
          </ThemeToggleButton>
        </div>
      </>
    </ThemeProvider>
  );
}




  