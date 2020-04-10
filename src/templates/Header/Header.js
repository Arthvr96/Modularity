import React from 'react';
import styled from 'styled-components';
import logo from 'assets/images/logo-darktheme.svg';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 5.6rem;
  background: ${({ theme }) => theme.bgColor};
  transition: background-color 0.6s ease-in,
    color 0.6s ease-in;
`;

const Logo = styled.h1`
  display: block;
  width: 14.6rem;
  height: 1.2rem;
  margin-left: 1rem;
  text-indent: -9999rem;
  background: url(${logo});
  filter: invert(${({ theme }) => theme.filter});
  transition: filter 0.6s ease-in;
`;

const ToggleThemeButton = styled.div`
  display: inline-block;

  .switch {
    position: relative;
    display: inline-block;
    width: 35px;
    height: 20px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.fgColor};
    transition: 0.4s;
  }
  .slider .before {
    position: absolute;
    height: 12px;
    width: 12px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
  }
  input:checked + .slider {
    border: 1px solid ${({ theme }) => theme.fgColor};
    background-color: transparent;
  }
  input:checked + .slider .before {
    background-color: ${({ theme }) => theme.fgColor};
    transform: translateX(14px);
  }
  .slider.round {
    border-radius: 34px;
  }
  .slider.round .before {
    border-radius: 50%;
  }
`;

const Header = ({ triggerToggleTheme }) => (
  <HeaderWrapper>
    <a href="index.html">
      <Logo>Modularity</Logo>
    </a>
    <ToggleThemeButton>
      <label htmlFor="inputName" className="switch">
        <input id="inputName" type="checkbox" />
        <span
          role="button"
          tabIndex={0}
          onClick={triggerToggleTheme}
          onKeyPress={triggerToggleTheme}
          className="slider round"
        >
          <span
            aria-label="Save"
            role="button"
            tabIndex={0}
            onClick={triggerToggleTheme}
            onKeyPress={triggerToggleTheme}
            className="before"
          />
        </span>
      </label>
    </ToggleThemeButton>
    <HamburgerMenu />
  </HeaderWrapper>
);

export default Header;
