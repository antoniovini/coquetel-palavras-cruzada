import React from 'react';
import styled from 'styled-components';

import coquetel from "../assets/coquetel.png";


const Container = styled.div`
  background-image: url('../assets/background.png');
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position:relative;
`;

const LogoContainer = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width:100%;
  position: absolute;
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