import React from 'react';
import styled from 'styled-components';
import { featureOne as data } from 'data/featuresInfo';
import media from 'utilites/media';

const FeatureOneSection = styled.section`
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
    order:5;
    width:50%;
  `}
`;

const FeatureOneContent = styled.div`
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

const FeatureOneWrapper = styled.div`
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
  width: 45%;
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
  grid-row-gap: 8px;
  align-items: center;
  margin: 2.4rem 0 4rem 0;

  ${media.desktop`
    grid-column-gap: 32px;
    margin: 4rem 0;
  `}
`;

const Icon = styled.img`
  width: 4.8rem;
  height: 4.8rem;
`;

const IconDescription = styled.p`
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.secondary};
`;

const FeatureOne = () => {
  return (
    <FeatureOneSection>
      <ImgPlaceHolder alt={data.title} />
      <FeatureOneContent>
        <FeatureOneWrapper>
          <Subtitle>{data.subtitle}</Subtitle>
          <Title>{data.title}</Title>
          <Paragraph>{data.description}</Paragraph>
          <Grid>
            <Icon src={data.icon1} alt="stoper" />
            <Icon src={data.icon2} alt="cup" />
            <IconDescription>{data.descriptionIcon1}</IconDescription>
            <IconDescription>{data.descriptionIcon2}</IconDescription>
          </Grid>
        </FeatureOneWrapper>
      </FeatureOneContent>
    </FeatureOneSection>
  );
};

export default FeatureOne;
