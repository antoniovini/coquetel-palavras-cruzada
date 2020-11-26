import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url('../assets/background.png');
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

function DefaultLayout(Scene) {
  return () => (
    <Container>
      <Scene />
    </Container>
  );
}

export default DefaultLayout;