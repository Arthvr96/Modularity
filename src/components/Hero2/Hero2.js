import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import arrow from 'assets/images/arrow-lighttheme.svg';
import gsap from 'gsap';
import media from 'utilites/media';
import hero2dark from 'assets/images/hero2dark.jpg';
import hero2light from 'assets/images/hero2light.jpg';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 5rem;
  width: 100vw;
  height: ${global.window.innerHeight}px;
  background-image: url(${hero2dark});
  background-repeat: no-repeat;
  background-size: 120% 100%;
  background-position-x: 0;
  background-position-y: 5.6rem;

  ${media.desktop`
  background-image: url(${hero2dark});
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position-x: 0;
  background-position-y: 50%;
  `}
`;

const ContentWrapper = styled.div`
  width: 85%;
`;

const SubTitle = styled.h4`
  margin-bottom: 1.6rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  width: 45%;
  min-width: 170px;
  margin-bottom: 5.6rem;
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bolt};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.secondary};
  ${media.tablet`
    font-size: ${({ theme }) => theme.size.desktop.m};
    line-height: ${({ theme }) => theme.lineHeight.m};
  `}
  ${media.desktop`
    width:30rem;
  `}
`;

const ExploreArrow = styled.span`
  display: flex;
  align-items: center;

  button.arrow {
    display: block;
    width: 15rem;
    height: 4rem;
    position: relative;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondary};
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 1.8rem;
      height: 1.6rem;
      transform: translateY(-50%) rotate(90deg);
      background: url(${arrow}) 0 50% no-repeat;
      filter: invert(${({ theme }) => (theme.isDark ? '100%' : '0%')});
    }
  }
`;

const contentSubTtitle = 'In Marketing';
const contentParagraph = 'Product is an object made available for consumer use';

const Hero2 = ({ showHero2, togglePartners, hideHero2, themeChanged }) => {
  const [firstChange, setFirstChange] = useState(true);
  let hero2 = useRef(null);

  const setDefaultHero2 = () => {
    gsap.set(hero2, { display: 'none', autoAlpha: 0 });
  };

  const showHero = () => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });
    window.scroll(0, 0);
    tl.to(hero2, {
      duration: 0.2,
      delay: 1,
      display: 'flex',
    }).to(hero2, {
      duration: 1,
      delay: 0.5,
      autoAlpha: 1,
    });
  };

  const changeThemeToLight = () => {
    const widthWindow = window.innerWidth;
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });
    tl.to(hero2, {
      duration: 0.4,
      autoAlpha: 0,
    })
      .set(hero2, {
        backgroundImage: `url(${hero2light})`,
        backgroundSize: `${widthWindow < 700 ? '300% 100%' : '120% 100%'}`,
        backgroundPositionX: `${widthWindow < 700 ? '45%' : '20%'}`,
        backgroundPositionY: `${widthWindow < 700 ? '5.6rem' : '5.6rem'}`,
      })
      .to(hero2, {
        duration: 0.4,
        autoAlpha: 1,
      });
  };

  const changeThemeToDark = () => {
    const widthWindow = window.innerWidth;
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });
    tl.to(hero2, {
      duration: 0.4,
      autoAlpha: 0,
    })
      .set(hero2, {
        backgroundImage: `url(${hero2dark})`,
        backgroundSize: `${widthWindow < 700 ? '120% 100%' : '120% auto'}`,
        backgroundPositionX: `${widthWindow < 700 ? '0' : '0'}`,
        backgroundPositionY: `${widthWindow < 700 ? '5.6rem' : '50%'}`,
      })
      .to(hero2, {
        duration: 0.4,
        autoAlpha: 1,
      });
  };

  const changeTheme = () => {
    if (themeChanged === 'light') {
      setFirstChange(false);
      changeThemeToLight();
    } else if (themeChanged === 'dark' && !firstChange) {
      changeThemeToDark();
    }
  };

  const hideHero = () => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });
    tl.to(hero2, {
      duration: 1,
      autoAlpha: 0,
    }).to(hero2, {
      duration: 0,
      display: 'none',
    });
  };

  useEffect(() => {
    if (hideHero2) {
      hideHero();
    } else if (!showHero2) {
      setDefaultHero2();
    } else if (showHero2) {
      showHero();
    }
    if (showHero2) {
      changeTheme();
    }
  });

  return (
    <Wrapper
      ref={(el) => {
        hero2 = el;
      }}
    >
      <ContentWrapper>
        <SubTitle>{contentSubTtitle}</SubTitle>
        <Paragraph>{contentParagraph}</Paragraph>
        <ExploreArrow role="button" tabIndex={0}>
          <button
            onClick={togglePartners}
            type="button"
            className="arrow"
            aria-label="arrow"
          >
            <span>Explore</span>
          </button>
        </ExploreArrow>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Hero2;
