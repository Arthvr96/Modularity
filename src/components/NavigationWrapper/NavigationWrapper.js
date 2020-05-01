import React from 'react';
import styled from 'styled-components';
import { navigationLinks } from 'utilites/navigationLinks';
import media from 'utilites/media';
import NavigationItem from './NavigationItem/NavigationItem';

const NavWrapper = styled.nav`
  position: absolute;
  z-index: 500;
  right: 0;
  top: 0;
  display: block;
  width: 100vw;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100vw')});
  transition: transform 1s 0.2s ease-in-out;

  ${media.desktop`
    width:auto;
    margin-right:10%;
    position: static;
    transform:none;
  `}

  ul {
    position: relative;
    z-index: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${function setHight({ isOpen }) {
      let heightMenu = 0;
      if (isOpen) {
        heightMenu = global.window.innerHeight;
      } else {
        heightMenu = global.window.innerHeight;
      }
      return heightMenu;
    }}px;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.bgColor};

    ${media.desktop`
      position: static;
      flex-direction: row;
      height:5.6rem;
      background: transparent;
    `}
  }

  li {
    width: 100vw;
    margin-bottom: 2.4rem;
    text-align: center;
    list-style: none;
    ${media.desktop`
      width: auto;
      margin: 0 2.4rem;
      transition: transform 0.5s ease-in-out;
    `}
  }

  li:last-child {
    position: absolute;
    bottom: 10px;
    left: 0;
    ${media.desktop`
      display:none;
    `}
  }

  li:hover {
    ${media.desktop`
    transform: translateX(9px);
    `}
  }

  li:hover a {
    ${media.desktop`
    letter-spacing: 2px;
    `}
  }

  li a {
    margin-left: 0;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.fontColor};
    text-decoration: none;
    text-transform: uppercase;
    ${media.desktop`
      font-size: 1.6rem;
      transition: letter-spacing 0.5s ease-in-out;
    `}
  }
`;

const NavigationWrapper = ({ isOpen }) => {
  return (
    <NavWrapper isOpen={isOpen}>
      <ul>
        {navigationLinks.map((item) => (
          <NavigationItem key={item.name} {...item} />
        ))}
      </ul>
    </NavWrapper>
  );
};

export default NavigationWrapper;
