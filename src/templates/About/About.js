import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import media from 'utilites/media';
import imgDark from 'assets/images/about/dark_img.jpg';
import imgLight from 'assets/images/about/light_img.jpg';

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.6s ease-in, color 0.6s ease-in;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;

  ${media.desktop`
    display: flex;
    height:50vh;
    justify-content:space-around;
    align-items: center;
  `}
`;

const Header = styled.h2`
  margin: 3.2rem 0 1.6rem 0;
  font-size: ${({ theme }) => theme.size.mobile.l};
  font-weight: ${({ theme }) => theme.fontWeight.bolt};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.secondary};

  ${media.desktop`
    font-size: ${({ theme }) => theme.size.desktop.xl};
    lineHeight: ${({ theme }) => theme.lineHeight.xl};
  `}
`;

const Paragraph = styled.p`
  margin-bottom: 3.2rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.secondary};

  ${media.desktop`
    width: 60%;
    font-size: ${({ theme }) => theme.size.desktop.s};
    line-height: ${({ theme }) => theme.lineHeight.s};
  `}
`;

const Img = styled.div`
  width: 100%;
  height: 184px;
  background: url(${({ theme }) => (theme.isDark ? imgDark : imgLight)}) no-repeat;
  background-size: cover;
  ${media.desktop`
    height:50vh;
  `}
`;

const paragraphContent =
  'Modern storytelling has a broad purview. In addition to its traditional forms (fairytales, folktales, mythology, legends, fables etc.), it has extended itself to representing history, personal narrative, political commentary and evolving cultural norms. Contemporary storytelling is also widely used to address educational objectives. New forms of media are creating new ways for people to record, express and consume stories. Tools for asynchronous group communication can provide an environment for individuals to reframe or recast individual stories into group stories.';

const About = ({ showAbout }) => {
  let about = useRef(null);

  const setDefaultAbout = () => {
    gsap.set(about, { display: 'none', autoAlpha: 0 });
  };

  const showAboutSection = () => {
    gsap.set(about, { display: 'flex', autoAlpha: 1 });
  };

  useEffect(() => {
    if (!showAbout) {
      setDefaultAbout();
    } else {
      showAboutSection();
    }
  });

  return (
    <AboutWrapper
      ref={(el) => {
        about = el;
      }}
    >
      <Wrapper>
        <Header>About us</Header>
        <Paragraph>{paragraphContent}</Paragraph>
      </Wrapper>
      <Img />
    </AboutWrapper>
  );
};

export default About;
