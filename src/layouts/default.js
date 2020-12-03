import React from 'react';
import styled from 'styled-components';

import coquetel from "../assets/coquetel.png";


const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const LogoContainer = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width:100%;
`;


const Logo = styled.div`
background-image: url(${coquetel});
background-size: contain;
background-position: center;
background-repeat: no-repeat;
width:100px;
height:100px;
`


function DefaultLayout(Scene) {
  return () => (
    <Container>
      <LogoContainer>
        <Logo/>
      </LogoContainer>
      <Scene />
    </Container>
  );
}

export default DefaultLayout;