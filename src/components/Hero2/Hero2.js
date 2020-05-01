import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { fonts, lineHight } from 'utilites/typography';
import arrow from 'assets/images/arrow-lighttheme.svg';
import gsap from 'gsap';
import media from 'utilites/media';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 5rem;
  width: 100vw;
  height: calc(100vh - 5.6rem);
  height: ${global.window.innerHeight}px;
  background: url(${({ theme }) => theme.hero2img})
    ${({ theme }) =>
      theme.info === 'dark' ? '50% 6rem' : '0% 60px'} no-repeat;
  background-position-x: ${({ theme }) =>
    theme.info === 'dark' ? '0px' : '-500px'};
  background-size: ${({ theme }) =>
    theme.info === 'dark' ? '100% auto' : '1500px 100%'};
  ${media.tablet`
    background-position-x:25%;
  `}
  ${media.desktop`
    background: url(${({ theme }) => theme.hero2img}) 0% 30% no-repeat;
    background-position-x:0;
    background-size: cover;
  `}
  ${media.desktopXL`
  background: url(${({ theme }) => theme.hero2img}) 0% 40% no-repeat;
  background-size: cover;
  `}
`;

const ContentWrapper = styled.div`
  width: 85%;
`;

const SubTitle = styled.h4`
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  font-weight: ${fonts.Normal};
  line-height: ${lineHight.mobileP}rem;
  color: ${({ theme }) => theme.fontColor};
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  width: 45%;
  min-width: 170px;
  margin-bottom: 5.6rem;
  font-size: 2.4rem;
  font-weight: ${fonts.Bolt};
  line-height: ${lineHight.mobileH3}rem;
  color: ${({ theme }) => theme.fontColor};
  ${media.tablet`
    font-size:3.2rem;
    line-height: ${lineHight.desktopH3}rem;
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
    color: ${({ theme }) => theme.fontColor};
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
      filter: invert(${({ theme }) => (theme.info === 'dark' ? '100%' : '0%')});
    }
  }
`;

const contentSubTtitle = 'In Marketing';
const contentParagraph = 'Product is an object made available for consumer use';

const Hero2 = ({ showHero2, togglePartners, hideHero2 }) => {
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
