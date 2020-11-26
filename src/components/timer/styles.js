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

  div.content{
    
    width:100px;
    padding: 10px 10px 10px 70px;
    background-color: white;
    border-radius: 40px 20px 20px 40px;
    color: #536373;
    display:flex;
    justify-content:center;
    align-items:center;

    gap: 10px;

    h3{
      text-align: center;
      width:70px;
    }
  }
`;
