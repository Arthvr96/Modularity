import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
// import gsap from 'gsap';

const Header = styled.h2`
  color: black;
  font-size: 5rem;
  font-weight: bold;
`;

const Section1 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;
const Section2 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: yellow;
`;
const Section3 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: green;
`;
const Section4 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blue;
`;
const Section5 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: purple;
`;

const Testing = () => {
  return (
    <>
      <Section1>
        <Header>Test</Header>
      </Section1>
      <Section2>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <Header>Test</Header>
        </ScrollAnimation>
      </Section2>
      <Section3>
        <ScrollAnimation animateIn="fadeIn">
          <Header>Test</Header>
        </ScrollAnimation>
      </Section3>
      <Section4>
        <Header>Test</Header>
      </Section4>
      <Section5>
        <Header>Test</Header>
      </Section5>
    </>
  );
};

export default Testing;
