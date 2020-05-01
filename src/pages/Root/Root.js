import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import 'normalize.css';
import GlobalStyles from 'themes/GlobalStyles';
import { themeDark, themeLight } from 'themes/theme';
import Header from 'templates/Header/Header';
import Partners from 'templates/Partners/Partners';
import HeroesSection from '../../templates/HeroesSection/HeroesSection';

class Root extends React.Component {
  state = {
    theme: 'dark',
    showPartners: false,
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
    this.setState({ showPartners: true });
  };

  render() {
    const { theme } = this.state;
    const { showPartners } = this.state;

    const Wrapper = styled.div`
      display: ${showPartners ? 'block' : 'none'};
    `;

    return (
      <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
        <>
          <GlobalStyles />
          <Header triggerToggleTheme={this.toggleTheme} />
          <HeroesSection
            togglePartners={this.togglePartners}
            hideHero2={showPartners}
          />
          <Wrapper>
            <Partners showPartners={showPartners} />
          </Wrapper>
        </>
      </ThemeProvider>
    );
  }
}
export default Root;
