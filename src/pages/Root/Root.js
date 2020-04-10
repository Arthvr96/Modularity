import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import GlobalStyles from 'themes/GlobalStyles';
import { themeDark, themeLight } from 'themes/theme';
import Header from 'templates/Header/Header';
import HeroesSection from '../../templates/HeroesSection/HeroesSection';

class Root extends React.Component {
  state = {
    theme: 'dark',
  };

  toggleTheme = () => {
    const { theme } = this.state;
    if (theme === 'dark') {
      this.setState({ theme: 'light' });
    } else {
      this.setState({ theme: 'dark' });
    }
  };

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider
        theme={theme === 'dark' ? themeDark : themeLight}
      >
        <>
          <GlobalStyles />
          <Header triggerToggleTheme={this.toggleTheme} />
          <HeroesSection />
        </>
      </ThemeProvider>
    );
  }
}
export default Root;
