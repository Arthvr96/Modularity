import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { featureTwo as data } from 'data/featuresInfo';
import media from 'utilites/media';

function getName() {
  return ({ theme }) => (theme.isDark ? data.imgDark : data.imgLight);
}

const FeatureTwoWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  background: ${({ theme }) => theme.colors.primary} url(${getName()}) no-repeat;
  background-size: 100% 0%; /* height image will set after load page in useEffect call */
  transition: background-color 0.6s ease-in, background-image 0.4s 0.4s ease-in,
    color 0.6s ease-in;

  ${media.tabletXL`
    min-height: 0;
    background-position: 0% 100%;
    background-size: 50% 100%;
    height:60vh;
    align-items: flex-start;
    justify-content: flex-end;
  `}
`;

const Wrapper = styled.div`
  margin-top: 100px;
  width: 90%;

  ${media.tabletXL`
    margin: 8.5rem 10vW 8.5rem 10vw;
    width: calc(40% - 8.5rem);
  `}
`;

const Subtitle = styled.h4`
  font-size: ${({ theme }) => theme.size.mobile.s};
  margin: 1.5rem 0;
  font-weight: ${({ theme }) => theme.fontWeight.bolt};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Title = styled.h2`
  width: 70%;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.size.mobile.l};
  font-weight: ${({ theme }) => theme.fontWeight.bolt};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.secondary};
`;

const Description = styled.p`
  margin-bottom: 2.4rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.secondary};
`;

const GridIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

const GridHeader = styled.h4`
  font-size: ${({ theme }) => theme.size.mobile.l};
  font-weight: ${({ theme }) => theme.fontWeight.bolt};
  color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 20%;
    height: 0.8rem;
    margin-top: 1rem;
    background: ${({ theme }) => theme.colors.secondary};
    position: absolute;
  }
`;

const DescriptionGrid = styled.p`
  margin-top: 2.5rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.secondary};
`;

const FeatureTwo = () => {
  let wrapper = useRef(null);
  let feature1 = useRef(null);

  function setBgSize() {
    if (window.innerWidth < 1024) {
      const heightWrapper = wrapper.clientHeight;
      const heightFeature1 = feature1.clientHeight;
      feature1.style.backgroundSize = `100% ${heightFeature1 - heightWrapper - 10}px`;
    }
  }

  useEffect(() => {
    setBgSize();
  });

  return (
    <>
      <FeatureTwoWrapper
        ref={(el) => {
          feature1 = el;
        }}
      >
        <Wrapper
          ref={(el) => {
            wrapper = el;
          }}
        >
          <Subtitle>{data.subtitle}</Subtitle>
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>
          <GridIconsWrapper>
            <div>
              <GridHeader>{data.header1}</GridHeader>
              <DescriptionGrid>{data.descriptionHeader1}</DescriptionGrid>
            </div>
            <ul>
              <GridHeader>{data.header2}</GridHeader>
              <DescriptionGrid>{data.descriptionHeader2}</DescriptionGrid>
            </ul>
          </GridIconsWrapper>
        </Wrapper>
      </FeatureTwoWrapper>
    </>
  );
};

export default FeatureTwo;
