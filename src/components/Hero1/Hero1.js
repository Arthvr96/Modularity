import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import media from 'utilites/media';
import arrow from 'assets/images/arrow-lighttheme.svg';
import hero1dark from 'assets/images/hero1dark.jpg';
import hero1light from 'assets/images/hero1light.jpg';

const HeroOneSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 90rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  transition: background-color 0.6s ease-in, color 0.6s ease-in;

  ${media.desktop`
    flex-direction: row;
    min-height:0;
  `}
`;
const HeroImagePlaceHolder = styled.div`
  width: 100%;
  height: 40%;
  background: url(${({ theme }) => (theme.isDark ? hero1dark : hero1light)}) center;
  background-size: cover;
  transition: background-image 0.6s ease-in;

  ${media.desktop`
    height:100%;
    width:50%;
    order:5;
  `}
`;

const HeroOneContent = styled.div`
  width: 90%;

  ${media.desktop`
    display:flex;
    width:50%;
    flex-direction:column;
    justify-content: center;
    height:100%;
  `}
`;

const Wrapper = styled.div`
  ${media.desktop`
    margin: 0 15% 0 10vw;
  `}
`;

const Subtitle = styled.h4`
  margin: 3.2rem 0 1.6rem 0;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.bolt};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.secondary};
  transition: color 0.6s ease-in;

  ${media.desktop`
    font-size: ${({ theme }) => theme.size.desktop.xs};
    margin:0;
  `}
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.size.mobile.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bolt};
  line-height: ${({ theme }) => theme.lineHeight.l};
  color: ${({ theme }) => theme.colors.secondary};
  transition: color 0.6s ease-in;

  ${media.desktop`
    margin:2.4rem 0 3.2rem 0;
    font-size: ${({ theme }) => theme.size.desktop.xxl};
    line-height: ${({ theme }) => theme.lineHeight.xxl};
    width:100%;
  `}
`;

const Paragraph = styled.p`
  margin: 1.6rem 0 3.2rem 0;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.secondary};
  transition: color 0.6s ease-in;

  ${media.desktop`
      width:85%;
  `}
`;

const arrowMixin = css`
  content: '';
  position: absolute;
  left: -2.8rem;
  transform: translateY(50%);
  display: block;
  width: 1.8rem;
  height: 1.2rem;
  background: url(${arrow}) no-repeat;
  filter: invert(${({ theme }) => (theme.isDark ? '0%' : '100%')});
  transition: filter 0.6s ease-in;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.desktop`
    width:90%;
    flex-direction: row;
    justify-content: space-between;
  `}

  .secondCta {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }

  button span {
    position: relative;
  }

  .firstCta span::before {
    ${arrowMixin}
  }

  .secondCta span::before {
    ${arrowMixin}
    transform: translateY(50%) rotate(-90deg);
    opacity: 0;
    transition: opacity 0.3s 0.1s ease-in, transform 0.5s ease-in;
  }

  .secondCta:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }

  .secondCta:hover span::before {
    transform: translateY(50%) rotate(0deg);
    opacity: 1;
  }
`;

const CtaButton = styled.button`
  width: 100%;
  height: 4.8rem;
  margin-bottom: 1.6rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.bolt};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  text-transform: uppercase;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.6s ease-in, color 0.6s ease-in, border-color 0.6s ease-in;

  ${media.desktop`
    width: 48%;
  `}
`;

const contentSubTtitle = 'Subtitle';
const contentHeaderTitle = 'Our product is available for use';
const contentParagraph = `A project is a temporary endeavor designed to produce a unique product, service or result with a defined beginning and end undertaken to meet unique goals and objectives, typically to bring about beneficial change or added value. The object of project management is to produce a complete project which complies with the client's objectives.`;

const Hero1 = ({ toggleHero, hideHero1 }) => {
  const [firstChange, setFirstChange] = useState(true);

  let hero1 = useRef(null);

  const showHeroOne = () => {
    const img = hero1.querySelector('.img');
    const subtitle = hero1.querySelector('.subtitle');
    const title = hero1.querySelector('.title');
    const paragraph = hero1.querySelector('.paragraph');
    const buttons = hero1.querySelector('.buttons');

    setFirstChange(false);

    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });
    tl.fromTo(hero1, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1 })
      .fromTo(img, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1 })
      .addLabel('content')
      .fromTo(
        subtitle,
        { autoAlpha: 0 },
        { duration: 2.5, delay: 0.5, autoAlpha: 1 },
        'content',
      )
      .fromTo(title, { autoAlpha: 0 }, { duration: 2.5, autoAlpha: 1 }, 'content')
      .fromTo(
        paragraph,
        { autoAlpha: 0 },
        { duration: 2.5, delay: 0.5, autoAlpha: 1 },
        'content',
      )
      .fromTo(
        buttons,
        { autoAlpha: 0 },
        { duration: 1, delay: 2, autoAlpha: 1 },
        'content',
      );
  };

  const hideHeroOne = () => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.to(hero1, { duration: 1, autoAlpha: 0 }).set(hero1, { display: 'none' });
  };

  useEffect(() => {
    if (!hideHero1 && firstChange) {
      showHeroOne();
    } else if (hideHero1) {
      hideHeroOne();
    }
  });

  return (
    <HeroOneSection
      ref={(el) => {
        hero1 = el;
      }}
    >
      <HeroImagePlaceHolder className="img" />
      <HeroOneContent>
        <Wrapper>
          <Subtitle className="subtitle">{contentSubTtitle}</Subtitle>
          <Title className="title">{contentHeaderTitle}</Title>
          <Paragraph className="paragraph">{contentParagraph}</Paragraph>
          <ButtonsWrapper className="buttons">
            <CtaButton className="firstCta">
              <span>Main Hero</span>
            </CtaButton>
            <CtaButton onClick={toggleHero} className="secondCta">
              <span>Second Hero</span>
            </CtaButton>
          </ButtonsWrapper>
        </Wrapper>
      </HeroOneContent>
    </HeroOneSection>
  );
};

export default Hero1;
