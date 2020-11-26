import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position:relative;

  user-select: none;

  img{
    height: 60px;
    position: absolute;
  }

  div{
    padding: 10px 10px 10px 70px;
    background-color: white;
    border-radius: 40px 20px 20px 40px;
    color: #536373;
  }
`;
