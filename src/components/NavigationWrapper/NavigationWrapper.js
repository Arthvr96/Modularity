import React from 'react';
import styled from 'styled-components';
import { navigationLinks } from 'utilites/navigationLinks';
import NavigationItem from './NavigationItem/NavigationItem';

const NavWrapper = styled.nav`
  display: block;
  width: 100vw;
  height: ${global.window.innerHeight}px;
  position: absolute;
  z-index: 0;
  right: 0;
  top: 0;
  background: ${({ theme }) => theme.bgColor};
  transform: translateX(
    ${({ isOpen }) => (isOpen === 'true' ? '0' : '-100vw')}
  );
  transition: transform 1s 0.2s ease-in-out;

  ul {
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${global.window.innerHeight}px;
  }

  li {
    width: 100vw;
    text-align: center;
    list-style: none;
    margin-bottom: 2.4rem;
  }

  li:last-child {
    position: absolute;
    bottom: 10px;
    left: 0;
  }

  li a {
    margin-left: 0;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.fontColor};
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const NavigationWrapper = ({ isOpen }) => (
  <NavWrapper isOpen={isOpen}>
    <ul>
      {navigationLinks.map((item) => (
        <NavigationItem key={item.name} {...item} />
      ))}
    </ul>
  </NavWrapper>
);

export default NavigationWrapper;
