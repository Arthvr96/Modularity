import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import media from 'utilites/media';
import { partnerInfo } from 'data/partnersInfo';

const Wrapper = styled.section`
  padding-top: 5.6rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h2`
  margin: 0 0 3rem 0;
  padding-top: 4rem;
  font-size: 3.2rem;
  text-align: center;
  color: ${({ theme }) => theme.fontColor};
  transition: color 0.6s ease-in-out;
`;

const PartnersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(${partnerInfo.length / 2}, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  align-items: center;
  width: 90vw;
  height: 85%;
  margin: 0 auto;
  ${media.desktop`
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(${() => {
      const x = partnerInfo.length;
      let result = 0;
      if (x % 4 > 0) {
        result = x / 4 - (x % 4) / 4 + 1;
      } else {
        result = x / 4;
      }
      return result;
    }}, 1fr);
    height: 40%;
  `}
`;

const ElementOfGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #3f3f3f;

  border-bottom: 0;
  img {
    filter: invert(${({ theme }) => (theme.info === 'light' ? '1' : '0')});
    transition: filter 0.7s ease-in;
  }
  &:nth-child(odd) {
    border-right: 0;
  }

  &:nth-last-child(1),
  &:nth-last-child(2) {
    border-bottom: 1px solid #3f3f3f;
  }

  ${media.desktop`
    border:1px solid #3f3f3f;
    border-top: 0;
    border-right: 0;
    &:nth-child(odd) {
      border:1px solid #3f3f3f;
      border-top: 0;
      border-right: 0;
    }
    &:nth-child(-n+4) {
      border-top: 1px solid #3f3f3f;
    }

    &:last-child, &:nth-child(4n) {
      border-right: 1px solid #3f3f3f;
    }


  `}
`;

const Partners = ({ showPartners }) => {
  let partners = useRef(null);
  const setDefaultPartners = () => {
    gsap.set(partners, { display: 'none', autoAlpha: 0 });
  };

  const showPartnersSection = () => {
    gsap.set(partners, { display: 'flex', autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });
    tl.to(partners, {
      duration: 1,
      delay: 1,
      autoAlpha: 1,
    });
  };

  useEffect(() => {
    if (!showPartners) {
      setDefaultPartners();
    } else {
      showPartnersSection();
    }
  });

  return (
    <Wrapper
      ref={(el) => {
        partners = el;
      }}
    >
      <Header>Our partners</Header>
      <PartnersWrapper>
        {partnerInfo.map(({ img, name }, i) => (
          <ElementOfGrid key={name}>
            <img id={`item${i}`} src={img} alt={name} key={name} />
          </ElementOfGrid>
        ))}
      </PartnersWrapper>
    </Wrapper>
  );
};

export default Partners;
