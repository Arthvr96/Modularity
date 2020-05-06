import React from 'react';
import styled from 'styled-components';
import { fonts, lineHight } from 'utilites/typography';
import media from 'utilites/media';

const PersoneWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.fontColor};
  ${media.tablet`
    flex-direction: row;
    justify-content:space-between;
    .isOdd{
      order:5;
    }
  `}
`;

const ConentWrapper = styled.div`
  ${media.tablet`
    display:flex;
    justify-content:flex-start;
    width:50%;
  `}
  div {
    width: 80%;
    max-width: 600px;
    ${media.desktop`
      width:80%;
    `}
  }
`;

const ImgPlaceHolder = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;
  ${media.tablet`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    height:100%;
    width:50%;
    margin:0;
  `}
`;

const Img = styled.img`
  width: 100%;
  max-width: 600px;
  ${media.tablet`
    width:80%;
  `}
`;

const Name = styled.h2`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 3.2rem;
  font-weight: ${fonts.Bolt};
  line-height: ${lineHight.mobileH2}rem;
  color: ${({ theme }) => theme.fontColor};
`;

const Role = styled.h3`
  width: 100%;
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  font-weight: ${fonts.Bolt};
  line-height: ${lineHight.mobileP}rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fontColor};
  ${media.tablet`
    margin-bottom:4rem;
  `}
`;

const Description = styled.p`
  font-size: 1.6rem;
  font-weight: ${fonts.Normal};
  line-height: ${lineHight.mobileP}rem;
  color: ${({ theme }) => theme.fontColor};
`;

const Persone = ({ img, name, role, description, i }) => {
  return (
    <PersoneWrapper>
      <ImgPlaceHolder className={i % 2 > 0 ? 'isOdd' : 'isEven'}>
        <Img alt={name} src={img} />
      </ImgPlaceHolder>
      <ConentWrapper>
        <div>
          <Name>{name}</Name>
          <Role>{role}</Role>
          <Description>{description}</Description>
        </div>
      </ConentWrapper>
    </PersoneWrapper>
  );
};
export default Persone;
