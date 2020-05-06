import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Persone from 'components/Persone/Persone';
import teamInfo from 'data/teamInfo';
import { fonts, lineHight } from 'utilites/typography';
import media from 'utilites/media';

const TeamWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
`;

const ContentWrapper = styled.div`
  width: 90%;

  ${media.desktop`
    margin-left: 10vw;
  `}
`;

const Header = styled.h3`
  width: 90%;
  margin: 3.2rem 0;
  font-size: 2.4rem;
  font-weight: ${fonts.Bolt};
  line-height: ${lineHight.mobileH3}rem;

  ${media.tablet`
    width:80%;
    margin: 10.4rem 0 8rem 0;
    font-size: 3.2rem;
    line-height: ${lineHight.desktopH3}rem;
  `}
`;

const Team = ({ showTeam }) => {
  let team = useRef(null);

  const setDefaultTeam = () => {
    gsap.set(team, { display: 'none', autoAlpha: 0 });
  };

  const headerContent = `Team is a group of people who are
    interdependent with respect to information, resources, and
    skills and who seek to combine their efforts to achieve
    a common goal.`;

  const showTeamSection = () => {
    gsap.set(team, { display: 'flex' });
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });
    tl.to(team, {
      duration: 1,
      delay: 1,
      autoAlpha: 1,
    });
  };

  useEffect(() => {
    if (!showTeam) {
      setDefaultTeam();
    } else {
      showTeamSection();
    }
  });

  return (
    <TeamWrapper
      ref={(el) => {
        team = el;
      }}
    >
      <ContentWrapper>
        <Header>{headerContent}</Header>
        {teamInfo.map((item, i) => (
          <div key={item.name}>
            <Persone i={i} key={item.name} {...item} />
          </div>
        ))}
      </ContentWrapper>
    </TeamWrapper>
  );
};

export default Team;
