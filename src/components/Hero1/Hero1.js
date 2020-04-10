import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { fonts, lineHight } from 'utilites/typography';
import gsap from 'gsap';
import arrow from 'assets/images/arrow-lighttheme.svg';

const Wrapper = styled.section`
  width: 100vw;
  padding-top: 2rem;
  background: url(${({ theme }) => theme.hero1img})
    ${({ theme }) => theme.bgColor} 50% 3rem no-repeat;
  background-size: 100% auto;
  transition: background-color 0.6s ease-in,
    background-image 0.3s 0.6s ease-in, color 0.6s ease-in;
  button.maincta {
    z-index: 1;
    position: relative;
    background-color: ${({ theme }) => theme.fgColor};
    color: ${({ theme }) => theme.fontRevers};

    &::before {
      position: absolute;
      left: 25%;
      top: 50%;
      transform: translateY(-50%);
      content: '';
      display: block;
      width: 1.8rem;
      height: 1.2rem;
      background: url(${arrow});
      filter: invert(${({ theme }) => theme.filter});
    }
  }
`;

const Test = styled.div`
  width: 100%;
  height: ${(global.window.innerWidth * 50) / 360}vh;
`;

const ContentWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const SubTitle = styled.h4`
  margin-top: 2rem;
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  font-weight: ${fonts.Normal};
  line-height: ${lineHight.mobileP}rem;
  color: ${({ theme }) => theme.fontColor};
  text-transform: uppercase;
`;

const HeaderTitle = styled.h2`
  margin-bottom: 1.6rem;
  font-size: 4rem;
  font-weight: ${fonts.Bolt};
  line-height: ${lineHight.mobileH1}rem;
  color: ${({ theme }) => theme.fontColor};
`;

const Paragraph = styled.p`
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  font-weight: ${fonts.Normal};
  line-height: ${lineHight.mobileP}rem;
  color: ${({ theme }) => theme.fontColor};
`;

const ButtonCta = styled.button`
  width: 100%;
  height: 4.8rem;
  margin-bottom: 1.6rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.bgColor};
  border: 1px solid ${({ theme }) => theme.fgColor};
`;

const contentSubTtitle = 'Subtitle';
const contentHeaderTitle =
  'Our product is available for use';
const contentParagraph =
  "A project is a temporary endeavor designed to produce a unique product, service or result with a defined beginning and end undertaken to meet unique goals and objectives, typically to bring about beneficial change or added value. The object of project management is to produce a complete project which complies with the client's objectives.";

const Hero1 = ({ triggerToggleHero }) => {
  const [state, setState] = useState({
    clicked: false,
  });

  let hero1 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });
    if (state.clicked) {
      tl.fromTo(
        hero1,
        { autoAlpha: 1 },
        { duration: 1, autoAlpha: 0 },
      ).to(hero1, { display: 'none' });
    }
  });

  const toggleHero = () => {
    setState({ clicked: true });
  };

  const functionsToToggleHero = () => {
    toggleHero();
    triggerToggleHero();
  };

  return (
    <Wrapper
      ref={(el) => {
        hero1 = el;
      }}
      className="hero1"
      id="test"
    >
      <Test />
      <ContentWrapper>
        <SubTitle>{contentSubTtitle}</SubTitle>
        <HeaderTitle>{contentHeaderTitle}</HeaderTitle>
        <Paragraph>{contentParagraph}</Paragraph>
        <ButtonCta className="maincta">Main Cta</ButtonCta>
        <ButtonCta onClick={functionsToToggleHero}>
          Second Cta
        </ButtonCta>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Hero1;
