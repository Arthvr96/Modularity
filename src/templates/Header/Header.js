import React from 'react';
import styled from 'styled-components';
import logoo from 'assets/images/logo-darktheme.svg';
import Hamburger from 'components/Hamburger/Hamburger';

const Logo = styled.h1`
  display: block;
  background: url(${logoo});
  width: 14.6rem;
  height: 1.2rem;
  margin-left: 1rem;
  text-indent: -9999rem;
`;

const WrapperNav = styled.nav`
  width: 100vw;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: red;
`;

const Header = () => (
  <WrapperNav>
    <a href="index.html">
      <Logo>Modularity</Logo>
    </a>
    <Hamburger />
  </WrapperNav>
);

export default Header;
