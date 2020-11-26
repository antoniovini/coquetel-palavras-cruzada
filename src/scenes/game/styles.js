import styled from 'styled-components';
import config from '../../config.json';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  h3.powered-by{
    color: white;
  }
`;

export const Box = styled.div`
  .header{
    padding: 20px;
    gap: 20px;
    background-color: #213B55;

    border-radius: 20px 20px 0 0;

    display: flex;

    .startstop{
      cursor: pointer;

      :hover{
        opacity: 0.8;
      }
    }
  }

  .board-box{
    background-color: white;
    padding: 20px;
    height: ${config.game.boardHeight}px;
  }

  .tip-box{
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #EBC947;

    border-radius: 0 0 20px 20px;

    h2{
      flex: 1;
      color: #5E6469;
      font-weight: 400;
      text-align: center;
    }
  }
`;
