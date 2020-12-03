import styled from "styled-components";

import coquetel from "../../assets/coquetel.png";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;

`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;

  margin-top: 20px;
  margin-bottom: 20px;

  div.header {
    user-select: none;
    background-color: #213c55;
    padding: 10px;

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

  .options {
    display: flex;
    flex-direction: column;

    div.option {
      background-color: #a63c66;
      cursor: pointer;
      padding: 20px;

      border-bottom: 2px solid #d37d9f;

      a {
        color: rgba(255, 255, 255, 0.67);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
      }

      :hover {
        filter: brightness(80%);
      }

      img {
        height: 40px;
      }
    }

    .option:last-child {
      border-radius: 0 0 20px 20px;
      border: 0;
    }
  }
`;

export const PoweredBy = styled.h3`
  color: white;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;

  padding: 0 20px;
`;

export const Logo = styled.div`
  background-image: url(${coquetel});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
`;
