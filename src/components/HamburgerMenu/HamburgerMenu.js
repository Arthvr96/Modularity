import React from 'react';
import styled from 'styled-components';
import media from 'utilites/media';
import NavigationWrapper from 'components/NavigationWrapper/NavigationWrapper';

const ButtonHamburger = styled.button`
  display: inline-block;
  padding: 1rem;
  margin: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  ${media.desktop`
  display:none;
  `}
`;

const HamburgerBox = styled.span`
  position: relative;
  z-index: 1000;
  display: inline-block;
  width: 1.9rem;
  height: 1.2rem;
`;

const HamburgerInner = styled.span`
  position: relative;
  z-index: 1000;
  display: block;
  width: 100%;
  height: 0.2rem;
  left: 0;
  top: 50%;
  background-color: ${({ isOpen, theme }) =>
    isOpen === 'true' ? 'transparent' : theme.fgColor};
  transform: translateY(-50%);
  transition: background-color 0.2s ease-in;

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: 1000;
    left: 0;
    display: block;
    width: 100%;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.fgColor};
    transition: background-color 0.2s ease-in, transform 0.3s 0.1s ease-in;
  }

  &::before {
    top: -5px;
    transform: translateY(${({ isOpen }) => (isOpen === 'true' ? '5px' : '0')})
      rotate(${({ isOpen }) => (isOpen === 'true' ? '45deg' : '0')});
  }

  &::after {
    top: 5px;
    transform: translateY(${({ isOpen }) => (isOpen === 'true' ? '-5px' : '0')})
      rotate(${({ isOpen }) => (isOpen === 'true' ? '-45deg' : '0')});
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
