import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import 'normalize.css';
import GlobalStyles from 'themes/GlobalStyles';
import { themeDark, themeLight } from 'themes/theme';
import Header from 'templates/Header/Header';
import Button from 'components/Button/Button';

function Root() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <ThemeProvider
      theme={theme === 'dark' ? themeDark : themeLight}
    >
      <>
        <GlobalStyles />
        <Header />
        <Button onClick={toggleTheme}>Test</Button>
      </>
    </ThemeProvider>
  );
}
export default Root;
