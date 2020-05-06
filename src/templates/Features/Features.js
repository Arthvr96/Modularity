import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import FeatureOne from 'components/FeatureOne/FeatureOne';
import FeatureTwo from 'components/FeatureTwo/FeatureTwo';
import FeatureThree from 'components/FeatureThree/FeatureThree';

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
    tl.to(features, {
      duration: 1,
      delay: 1,
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
    <div
      ref={(el) => {
        features = el;
      }}
    >
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
    </div>
  );
};

export default Features;
