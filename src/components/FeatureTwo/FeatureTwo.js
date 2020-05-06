import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { featureTwo as data } from 'data/featuresInfo';
import { fonts, lineHight } from 'utilites/typography';
import media from 'utilites/media';

function getName() {
  const dark = data.imgDark;
  const light = data.imgLight;
  return ({ theme }) => (theme.info === 'dark' ? dark : light);
}

const FeatureTwoWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  background: ${({ theme }) => theme.bgColor} url(${getName()}) no-repeat;
  background-size: 100% 0%; /* height image will set after load page in useEffect call */
  transition: background-color 0.6s ease-in, background-image 0.4s 0.4s ease-in,
    color 0.6s ease-in;

  ${media.tabletXL`
    min-height: 0;
    background-position: 0% 100%;
    background-size: 50% 100%;
    height:auto;
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
  font-size: 1.6rem;
  margin: 1.5rem 0;
  font-weight: ${fonts.Bolt};
  text-transform: uppercase;
  color: ${({ theme }) => theme.fontColor};
`;

const Title = styled.h2`
  width: 70%;
  margin-bottom: 1rem;
  font-size: 3.2rem;
  font-weight: ${fonts.Bolt};
  line-height: ${lineHight.mobileH2}rem;
  color: ${({ theme }) => theme.fontColor};
`;

const Description = styled.p`
  margin-bottom: 2.4rem;
  font-size: 1.6rem;
  font-weight: ${fonts.Normal};
  line-height: ${lineHight.mobileP}rem;
  color: ${({ theme }) => theme.fontColor};
`;

const GridIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  img {
    width: 4.8rem;
    height: 4.8rem;
    filter: invert(${({ theme }) => theme.filter});
  }
`;

const GridHeader = styled.h4`
  font-size: 3.2rem;
  font-weight: ${fonts.Bolt};
  color: ${({ theme }) => theme.fontColor};
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 20%;
    height: 0.8rem;
    margin-top: 1rem;
    background: ${({ theme }) => theme.fgColor};
    position: absolute;
  }
`;

const DescriptionGrid = styled.p`
  margin-top: 2.5rem;
  font-size: 1.6rem;
  font-weight: ${fonts.Normal};
  line-height: ${lineHight.mobileP}rem;
  color: ${({ theme }) => theme.fontColor};
`;

const FeatureTwo = () => {
  let wrapper = useRef(null);
  let feature1 = useRef(null);

  function setBgSize() {
    if (window.innerWidth < 1024) {
      const heightWrapper = wrapper.clientHeight;
      const heightFeature1 = feature1.clientHeight;
      feature1.style.backgroundSize = `100% ${
        heightFeature1 - heightWrapper - 10
      }px`;
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
