import styled from 'styled-components';
import config from '../../config.json';

export const Container = styled.div`
  /* min-width: 100%;
  min-height: 100%; */

  width: 100%;

  h3.powered-by{
    color: white;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media(min-width: 800px){
    width: 750px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  .header{
    padding: 20px;
    gap: 20px;
    background-color: #213B55;

    border-radius: 20px 20px 0 0;

    display: flex;

    overflow: auto;


    .startstop{
      cursor: pointer;

      :hover{
        opacity: 0.8;
      }
    }
  }

  .board-box{
    padding: 20px;
    width: 100%;
    background-color: white;
    overflow: auto;

    @media(min-width: 800px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }

  .tip-box{
    display: flex;
    min-height: 30px;
    align-items: center;
    width: 100%;
    background-color: #EBC947;

    border-radius: 0 0 20px 20px;

    transition: height .2s;

    padding: 10px 0;

    h2{
      flex: 1;
      color: #5E6469;
      font-weight: 400;
      text-align: center;
    }
  }
`;