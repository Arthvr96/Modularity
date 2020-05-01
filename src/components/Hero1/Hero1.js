import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import media from 'utilites/media';
import { fonts, lineHight } from 'utilites/typography';
import gsap from 'gsap';
import arrow from 'assets/images/arrow-lighttheme.svg';

const Wrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding-top: 2rem;
  background: url(${({ theme }) => theme.hero1img})
    ${({ theme }) => theme.bgColor} 50% 0 no-repeat;
  background-size: 100% 60vh;
  transition: background-color 0.6s ease-in, background-image 0.4s 0.4s ease-in,
    color 0.6s ease-in;

  ${media.tablet`
    height:100vh;
    background: url(${({ theme }) => theme.hero1img})
      ${({ theme }) => theme.bgColor} 50% ${
    window.innerHeight < 1025 ? '-10vh' : '0'
  } no-repeat;
    background-size: 100% 75%;
  `}
  ${media.desktop`
    height:100vh;
    background: url(${({ theme }) => theme.hero1img})
      ${({ theme }) => theme.bgColor} 130% 0% no-repeat;
    background-size: auto 100vh;
  `}
  ${media.desktopXL`
    height:100vh;
    background: url(${({ theme }) => theme.hero1img})
      ${({ theme }) => theme.bgColor} 100% 0% no-repeat;
    background-size: auto 100vh;
  `}
`;

const ContentWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${media.tablet`
    height:calc(100vh - 2rem);
  justify-content: flex-end;
  `}
  ${media.desktop`
  width:30%;
  margin: 0 10%;
    height:calc(100vh - 2rem);
  justify-content: center;
  `}
`;

const SubTitle = styled.h4`
  margin-top: 61vh;
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  font-weight: ${fonts.Normal};
  line-height: ${lineHight.mobileP}rem;
  color: ${({ theme }) => theme.fontColor};
  text-transform: uppercase;
  ${media.tablet`
    margin-top:0;
  `}
  ${media.desktop`
    margin-bottom: 2.4rem;
  `}
`;

const HeaderTitle = styled.h2`
  margin-bottom: 1.6rem;
  font-size: 4rem;
  font-weight: ${fonts.Bolt};
  line-height: ${lineHight.mobileH1}rem;
  color: ${({ theme }) => theme.fontColor};
  ${media.desktop`
    font-size: 5.6rem;
    line-height: ${lineHight.desktopH1}rem;
    margin-bottom: 2.4rem;
  `}
`;

const Paragraph = styled.p`
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  font-weight: ${fonts.Normal};
  line-height: ${lineHight.mobileP}rem;
  color: ${({ theme }) => theme.fontColor};
`;

const ButtonCtaWrapper = styled.div`
  ${media.tablet`
    width:100;
    display:flex;
    justify-content:space-between;
  `}
  button.maincta {
    position: relative;
    z-index: 1;
    background-color: ${({ theme }) => theme.fgColor};
    color: ${({ theme }) => theme.fontRevers};

    &::before {
      content: '';
      position: absolute;
      left: 25%;
      top: 50%;
      display: block;
      width: 1.8rem;
      height: 1.2rem;
      background: url(${arrow});
      transform: translateY(-50%);
      filter: invert(${({ theme }) => theme.filter});
      ${media.desktop`
        left: 15%;
      `}
    }
  }
  button.secondcta {
    ${media.desktop`
    position: relative;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      left: 25%;
      top: 50%;
      display: block;
      width: 1.8rem;
      height: 1.2rem;
      background: url(${arrow});
      transform: translateY(-50%) rotate(-45deg) ;
      transition: transform 0.5s ease-in-out;
      filter: invert(${({ theme }) => theme.filter});
      ${media.desktop`
        left: 15%;
      `}
    }
    `}
  }
  button.secondcta:hover {
    ${media.desktop`
      background:${({ theme }) => theme.fgColor};
      color:${({ theme }) => theme.fontRevers};
&::before{
  transform: translateY(-50%) rotate(0deg) ;
}
    `}
  }
`;

const ButtonCta = styled.button`
  width: 100%;
  height: 4.8rem;
  margin-bottom: 1.6rem;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.bgColor};
  border: 1px solid ${({ theme }) => theme.fgColor};
  color: ${({ theme }) => theme.fontColor};
  transition: background-color 0.6s ease-in, color 0.6s ease-in;
  cursor: pointer;
  ${media.tablet`
    width:45%;
    margin:5% 0;
  `};
`;

const contentSubTtitle = 'Subtitle';
const contentHeaderTitle = 'Our product is available for use';
const contentParagraph = `A project is a temporary endeavor designed to produce a unique product,
  service or result with a defined beginning and end undertaken to meet unique goals and objectives,
  typically to bring about beneficial change or added value. The object of project management is to produce a
  complete project which complies with the client's objectives.`;

const Hero1 = ({ toggleHero, hideHero1 }) => {
  let hero1 = useRef(null);

  const hideHero = () => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });
    tl.fromTo(hero1, { autoAlpha: 1 }, { duration: 1, autoAlpha: 0 }).to(
      hero1,
      {
        display: 'none',
      },
    );
  };

  useEffect(() => {
    if (hideHero1) {
      hideHero();
    }
  });

  const triggerToggleHero = () => {
    toggleHero();
  };

  return (
    <Wrapper
      ref={(el) => {
        hero1 = el;
      }}
      className="hero1"
      id="test"
    >
      <ContentWrapper>
        <SubTitle>{contentSubTtitle}</SubTitle>
        <HeaderTitle>{contentHeaderTitle}</HeaderTitle>
        <Paragraph>{contentParagraph}</Paragraph>
        <ButtonCtaWrapper>
          <ButtonCta className="maincta">Main Cta</ButtonCta>
          <ButtonCta className="secondcta" onClick={triggerToggleHero}>
            Second Cta
          </ButtonCta>
        </ButtonCtaWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Hero1;
