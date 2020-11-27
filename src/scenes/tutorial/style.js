import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-image: url('/assets/background.png');

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  div.header{
    user-select: none;
    background-color: #213C55;
    padding: 10px;

    gap: 20px;

    border-radius: 20px 20px 0 0;
    color: white;
    text-decoration: underline;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
      flex: 1;
      text-align: center;
    }

    img.logo{
      width: 80px;
    }
  }

  .options{
    display:flex;
    flex-direction: column;


    div.option{
      background-color: #A63C66;
      cursor: pointer;
      padding: 20px;
      
      border-bottom: 2px solid #D37D9F;

      a{
        color: rgba(255, 255, 255, .67);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
      }

      :hover{
        filter: brightness(80%);
      }
      
      img{
        height: 40px;
      }
    }

    .option:last-child{
      border-radius: 0 0 20px 20px;
      border: 0;
    }
  }
`;

export const PoweredBy = styled.h3`
  color: white;
`;