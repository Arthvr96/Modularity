import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { featureThree as data } from 'data/featuresInfo';
import { fonts, lineHight } from 'utilites/typography';
import media from 'utilites/media';

function getName() {
  const dark = data.imgDark;
  const light = data.imgLight;
  return ({ theme }) => (theme.info === 'dark' ? dark : light);
}

const FeatureThreeWrapper = styled.section`
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
    background-position: 100% 100%;
    background-size: 50% 100%;
    height:auto;
    align-items: flex-start;
    justify-content: flex-start;
  `}
`;

const Wrapper = styled.div`
  margin-top: 100px;
  width: 90%;

  ${media.tabletXL`
    margin: 8.5rem 0 8.5rem 10vw;
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
  width: 90%;
  margin-bottom: 1rem;
  font-size: 3.2rem;
  font-weight: ${fonts.Bolt};
  line-height: ${lineHight.mobileH2}rem;
  color: ${({ theme }) => theme.fontColor};
`;

const Description = styled.p`
  margin-bottom: 4.4rem;
  font-size: 1.6rem;
  font-weight: ${fonts.Normal};
  line-height: ${lineHight.mobileP}rem;
  color: ${({ theme }) => theme.fontColor};
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  label {
    position: relative;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 3rem;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) =>
      theme.info === 'dark' ? '#3F3F3F' : '#E4E4E4'};
    color: ${({ theme }) => theme.fontColor};
  }
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
    display: block;
    width: 1.8rem;
    height: 1.2rem;
    border: none;
    background: url(${data.formImg}) no-repeat;
  }
`;

const FormHeader = styled.h2`
  width: 100%;
  margin-bottom: 1.6rem;
  font-size: 2.4rem;
  font-weight: ${fonts.Bolt};
  line-height: ${lineHight.mobileH3}rem;
  color: ${({ theme }) => theme.fontColor};
`;

const FeatureThree = () => {
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
      <FeatureThreeWrapper
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
          <FormWrapper>
            <FormHeader>{data.formHeader}</FormHeader>
            <label htmlFor="mail">
              <input placeholder="*Your email address" id="mail" type="email" />
              <button aria-label="submit mail" />
            </label>
          </FormWrapper>
        </Wrapper>
      </FeatureThreeWrapper>
    </>
  );
};

export default FeatureThree;
