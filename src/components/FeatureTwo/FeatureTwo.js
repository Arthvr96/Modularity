import React from 'react';
import styled from 'styled-components';
import { featureTwo as data } from 'data/featuresInfo';
import media from 'utilites/media';

const FeatureTwoSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 5.6rem);
  min-height: 730px;

  ${media.desktop`
    min-height:640px;
    flex-direction:row;
    height: 60vh;
  `}
`;

const ImgPlaceHolder = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ theme }) => (theme.isDark ? data.imgDark : data.imgLight)}) 0% 35%;
  background-size: cover;
  transition: background-image 0.6s ease-in;

  ${media.desktop`
    width:50%;
  `}
`;

const FeatureThreeContent = styled.div`
  margin: 0 auto;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  transition: background-color 0.6s ease-in, color 0.6s ease-in;

  ${media.desktop`
    display:flex;
    align-items: center;
    width:50%;
  `}
`;

const FeatureTwoWrapper = styled.div`
  ${media.desktop`
    margin:0 10vw;
  `}
`;

const Subtitle = styled.h4`
  margin-top: 2.4rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.bolt};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Title = styled.h2`
  width: 75%;
  margin: 0.8rem 0;
  font-size: ${({ theme }) => theme.size.mobile.l};
  font-weight: ${({ theme }) => theme.fontWeight.bolt};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.secondary};

  ${media.desktop`
    font-size: ${({ theme }) => theme.size.desktop.xl};
    line-height: ${({ theme }) => theme.lineHeight.xl};
  `}
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.secondary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  align-items: center;
  margin: 2.4rem 0 4rem 0;
  position: relative;

  ${media.desktop`
    grid-column-gap: 16px;
    margin: 4rem 0;
  `}
`;

const GridHeader = styled.h4`
  font-size: ${({ theme }) => theme.size.mobile.l};
  font-weight: ${({ theme }) => theme.fontWeight.nbolt};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.secondary};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 20%;
    height: 0.8rem;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const GridDescription = styled.p`
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.secondary};
`;

const FeatureTwo = () => {
  return (
    <FeatureTwoSection>
      <ImgPlaceHolder alt={data.title} />
      <FeatureThreeContent>
        <FeatureTwoWrapper>
          <Subtitle>{data.subtitle}</Subtitle>
          <Title>{data.title}</Title>
          <Paragraph>{data.description}</Paragraph>
          <Grid>
            <GridHeader>{data.header1}</GridHeader>
            <GridHeader>{data.header2}</GridHeader>
            <GridDescription>{data.descriptionHeader1}</GridDescription>
            <GridDescription>{data.descriptionHeader2}</GridDescription>
          </Grid>
        </FeatureTwoWrapper>
      </FeatureThreeContent>
    </FeatureTwoSection>
  );
};

export default FeatureTwo;
