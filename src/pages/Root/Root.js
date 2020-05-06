import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import GlobalStyles from 'themes/GlobalStyles';
import { themeDark, themeLight } from 'themes/theme';
import Header from 'templates/Header/Header';
import Partners from 'templates/Partners/Partners';
import HeroesSection from 'templates/HeroesSection/HeroesSection';
import Features from 'templates/Features/Features';
import Team from 'templates/Team/Team';

class Root extends React.Component {
  state = {
    theme: 'dark',
    isVisible: false,
  };

  toggleTheme = () => {
    const { theme } = this.state;
    if (theme === 'dark') {
      this.setState({ theme: 'light' });
    } else {
      this.setState({ theme: 'dark' });
    }
  };

  togglePartners = () => {
    this.setState({ isVisible: true });
  };

  render() {
    const { theme } = this.state;
    const { isVisible } = this.state;
    // const dev = true;

    return (
      <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
        <>
          <GlobalStyles />
          <Header triggerToggleTheme={this.toggleTheme} />
          <HeroesSection
            togglePartners={this.togglePartners}
            hideHero2={isVisible}
          />
          <Partners showPartners={isVisible} />
          <Features showFeatures={isVisible} />
          <Team showTeam={isVisible} />
        </>
      </ThemeProvider>
    );
  }
}
export default Root;
