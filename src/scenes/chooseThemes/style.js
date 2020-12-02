import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  padding: 20px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 550px;

  div.header {
    user-select: none;
    background-color: #213c55;
    padding: 10px;

    gap: 20px;

    border-radius: 20px 20px 0 0;
    color: white;
    text-decoration: underline;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      flex: 1;
      text-align: center;
    }

    img.logo {
      width: 80px;
    }
  }
  div.options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-gap: 10px;
    background-color: white;
    width: 100%;
    height: 400px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 20px;

    div.circletheme {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:5px;
      width: 100px;
      height: 100px;
      border-radius: 50px;
      background-color: #A63C66;
      cursor: pointer;
      transition: opacity 0.2s;

      :hover {
        opacity: 0.8;
      }

      img{
        object-fit: contain;
        object-position: center;
        height:40%;
        width:40%;
      }

      p {
        color: white;
      }
    }
  }
`;

export const PoweredBy = styled.h3`
  color: white;
`;
