import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonHamburger = styled.button`
  display: inline-block;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
`;

const HamburgerBox = styled.span`
  width: 1.9rem;
  height: 1.2rem;
  display: inline-block;
  position: relative;
`;

const HamburgerInner = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 0.2rem;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ isOpen, theme }) =>
    isOpen === 'true' ? 'transparent' : theme.fgColor};
  transition: background-color 0.2s ease-in;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.fgColor};
    transition: transform 0.3s 0.1s ease-in;
  }

  &::before {
    top: -5px;
    transform: translateY(
        ${({ isOpen }) => (isOpen === 'true' ? '5px' : '0')}
      )
      rotate(
        ${({ isOpen }) =>
          isOpen === 'true' ? '45deg' : '0'}
      );
  }

  &::after {
    top: 5px;
    transform: translateY(
        ${({ isOpen }) =>
          isOpen === 'true' ? '-5px' : '0'}
      )
      rotate(
        ${({ isOpen }) =>
          isOpen === 'true' ? '-45deg' : '0'}
      );
  }
`;

const Paragraph = styled.p`
  color: black;
`;

function Hamburger() {
  const [isOpen, setisOpen] = useState('false');
  const toggleHamburger = () => {
    if (isOpen === 'false') {
      setisOpen('true');
    } else {
      setisOpen('false');
    }
  };

  return (
    <>
      <Paragraph>Test</Paragraph>
      <ButtonHamburger onClick={toggleHamburger}>
        <HamburgerBox>
          <HamburgerInner isOpen={isOpen} />
        </HamburgerBox>
      </ButtonHamburger>
    </>
  );
}

export default Hamburger;
