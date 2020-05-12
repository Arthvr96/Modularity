import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import FeatureOne from 'components/FeatureOne/FeatureOne';
import FeatureTwo from 'components/FeatureTwo/FeatureTwo';
import FeatureThree from 'components/FeatureThree/FeatureThree';

const Wrapper = styled.div`
  padding-top: 5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.6s ease-in;
`;

const Features = ({ showFeatures }) => {
  let features = useRef(null);

  const setDefaultFeatures = () => {
    gsap.set(features, { display: 'none', autoAlpha: 0 });
  };

  const showFeaturesSection = () => {
    gsap.set(features, { display: 'block', autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });
    tl.set(features, {
      autoAlpha: 1,
    });
  };

  useEffect(() => {
    if (!showFeatures) {
      setDefaultFeatures();
    } else {
      showFeaturesSection();
    }
  });

  return (
    <Wrapper
      ref={(el) => {
        features = el;
      }}
    >
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
    </Wrapper>
  );
};

export default Features;
