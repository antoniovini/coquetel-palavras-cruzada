import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({flat}) => flat ? 'transparent' : "#A63C66"};

  border-radius: 20px;
  color: rgba(255, 255, 255, .67);

  cursor: pointer;
  :hover{
    filter: brightness(80%);
  }
`;
