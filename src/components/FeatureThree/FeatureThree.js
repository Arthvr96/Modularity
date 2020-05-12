import React from 'react';
import styled from 'styled-components';
import { featureThree as data } from 'data/featuresInfo';
import media from 'utilites/media';

const FeatureThreeSection = styled.section`
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

const FeatureThreeWrapper = styled.div`
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

const FormWrapper = styled.div`
  margin-top: 2.4rem;
`;

const FormHeader = styled.h3`
  margin-bottom: 1.6rem;
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bolt};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.secondary};
`;

const FormInput = styled.input`
  position: relative;
  width: 100%;
  padding: 0.8rem 1.6rem;
  border: 0;
  border-radius: 5px;
  background: url(${data.formImg}) 97% 50% no-repeat;
  background-color: ${({ theme }) =>
    theme.isDark ? theme.colors.dark : theme.colors.light};
  margin-bottom: 4rem;
  color: ${({ theme }) => (theme.isDark ? theme.colors.lightes : theme.colors.dark)};
  transition: background-color 0.6s ease-in, color 0.6s ease-in;
`;

const FeatureThree = () => {
  return (
    <FeatureThreeSection>
      <ImgPlaceHolder alt={data.title} />
      <FeatureThreeContent>
        <FeatureThreeWrapper>
          <Subtitle>{data.subtitle}</Subtitle>
          <Title>{data.title}</Title>
          <Paragraph>{data.description}</Paragraph>
          <FormWrapper>
            <FormHeader>{data.formHeader}</FormHeader>
            <FormInput type="mail" placeholder="*Your email address" />
          </FormWrapper>
        </FeatureThreeWrapper>
      </FeatureThreeContent>
    </FeatureThreeSection>
  );
};

export default FeatureThree;
