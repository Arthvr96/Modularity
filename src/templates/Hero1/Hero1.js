import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: ${global.window.innerHeight - 77}px;
  background: red;
  h1 {
    padding: 0;
    margin: 0;
  }
`;

const Hero1 = () => (
  <Wrapper>
    <div>
      <h1>Heading 1</h1>
    </div>
  </Wrapper>
);

export default Hero1;
