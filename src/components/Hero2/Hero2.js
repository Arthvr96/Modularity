import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { fonts, lineHight } from 'utilites/typography';
import arrow from 'assets/images/arrow-lighttheme.svg';
import gsap from 'gsap';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 5rem;
  width: 100vw;
  height: ${global.window.innerHeight}px;
  background: url(${({ theme }) => theme.hero2img})
    ${({ theme }) =>
      theme.info === 'dark' ? '50% 6rem' : '0% 60px'}
    no-repeat;
  background-position-x: ${({ theme }) =>
    theme.info === 'dark' ? '0px' : '-500px'};
  background-size: ${({ theme }) =>
    theme.info === 'dark' ? '100% auto' : '1500px 100%'};
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
  margin-bottom: 7.6rem;
  font-size: 2.4rem;
  font-weight: ${fonts.Bolt};
  line-height: ${lineHight.mobileH3}rem;
  color: ${({ theme }) => theme.fontColor};
`;

const ExploreArrow = styled.span`
  display: flex;
  align-items: center;
  span.text {
    display: block;
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
    font-weight: ${fonts.Normal};
    line-height: ${lineHight.mobileP}rem;
    color: ${({ theme }) => theme.fontColor};
    text-indent: 0.5rem;
    cursor: pointer;
  }

  span.arrow {
    transform: translateY(-50%) rotate(90deg);
    display: block;
    width: 1.8rem;
    height: 1.6rem;
    background: url(${arrow}) 0 50% no-repeat;
    filter: invert(
      ${({ theme }) =>
        theme.info === 'dark' ? '100%' : '0%'}
    );
  }
`;

const contentSubTtitle = 'In Marketing';
const contentParagraph =
  'Product is an object made available for consumer use';

const Hero2 = ({ changeHero }) => {
  let hero2 = useRef(null);
  useEffect(() => {
    gsap.set(hero2, { display: 'none', autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });
    if (changeHero === 'true') {
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
          <span className="arrow" />
          <span className="text">Explore</span>
        </ExploreArrow>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Hero2;
