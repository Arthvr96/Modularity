import React from 'react';
import styled from 'styled-components';
import NavigationWrapper from 'components/NavigationWrapper/NavigationWrapper';

const ButtonHamburger = styled.button`
  display: inline-block;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
`;

const HamburgerBox = styled.span`
  z-index: 1000;
  width: 1.9rem;
  height: 1.2rem;
  display: inline-block;
  position: relative;
`;

const HamburgerInner = styled.span`
  z-index: 1000;
  position: relative;
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
    z-index: 1000;
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.fgColor};
    transition: background-color 0.2s ease-in,
      transform 0.3s 0.1s ease-in;
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

class HamburgerMenu extends React.Component {
  state = {
    isOpen: 'false',
  };

  toggleHamburger = () => {
    const { isOpen } = this.state;
    if (isOpen === 'false') {
      this.setState({ isOpen: 'true' });
    } else {
      this.setState({ isOpen: 'false' });
    }
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <ButtonHamburger onClick={this.toggleHamburger}>
          <HamburgerBox>
            <HamburgerInner isOpen={isOpen} />
          </HamburgerBox>
        </ButtonHamburger>
        <NavigationWrapper isOpen={isOpen} />
      </>
    );
  }
}

export default HamburgerMenu;
