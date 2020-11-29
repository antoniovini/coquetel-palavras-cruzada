import styled, { css } from "styled-components";
import config from "../../config.json";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
`;

export const Cell = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;

  user-select: none;

  width: ${({ yCount }) =>
    (config.game.boardHeight - config.game.boardPadding * 2) / yCount}px;
  height: ${({ yCount }) =>
    (config.game.boardHeight - config.game.boardPadding * 2) / yCount}px;

  transition: background-color 0.2s;

  ${({ correct }) =>
    correct &&
    css`
      background-color: rgba(39, 174, 96, 0.4);
    `};

  ${({ tips, selected, correct, failed }) =>
    tips
      ? css`
          background-color: #213b55;
        `
      : selected
      ? css`
          background-color: rgba(235, 201, 71, 0.4);
        `
      : correct
      ? css`
          background-color: rgba(39, 174, 96, 0.4);
        `
      : failed
      ? css`
          background-color: rgba(192, 57, 43, 0.4);
        `
      : css`
          background-color: transparent;
        `};

  .tip {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    cursor: pointer;

    font-weight: bold;
  }

  ${({ tips }) =>
    tips
      ? tips.length > 1 &&
        css`
          .tip:first-child {
            border-bottom: 1px solid white;
          }
        `
      : null}

  input {
    flex: 1;
    height: 100%;
    border: 0;
    outline: none;

    border: 1px solid #213b55;

    text-align: center;

    border-radius: 0;

    caret-color: transparent;
    background-color: transparent;

    cursor: pointer;

    transition: border 0.2s;

    font-size: 28px;
  }

  input:focus {
    border: 4px solid #ebc947;
  }
`;

export const Arrow = styled.img`
  position: absolute;
  max-height: 60%;
  max-width: 60%;
  width: ${({ size }) => size}px;
  top: ${({ y }) => y};
  left: ${({ x }) => x};
`;

export const Double = styled.div`
  flex: 1;
  height: 100%;

  position: relative;

  .line-blue{
    position: absolute;
    top: 0;
    left: 0;

    pointer-events: none;

    opacity: 1;
    transition: opacity .2s;

    stroke: #213b55;
    stroke-width: 2px;
  }

  .line-yellow{
    position: absolute;
    top: 0;
    left: 0;

    pointer-events: none;

    stroke: #ebc947;
    stroke-width: 4px;

    opacity: 0;
    transition: opacity .2s;
  }

  :focus-within{
    & .line-yellow {
      opacity: 1;
    }

    & .line-blue {
      opacity: 0;
    }
  }

  div.top {
    width: 100%;
    height: 100%;

    border-top: 1px solid #213b55;
    border-left: 1px solid #213b55;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    transition: border 0.2s;

    clip-path: polygon(100% 0, 0 100%, 0 0);

    input {
      height: 50%;
      width: 50%;
      flex: none;

      border: 0;
    }

    input:focus {
      border: 0;
    }

    :focus-within {
      border-top: 4px solid #ebc947;
      border-left: 4px solid #ebc947;
    }
  }

  div.bottom {
    width: 100%;
    height: 100%;

    border-right: 1px solid #213b55;
    border-bottom: 1px solid #213b55;

    position: absolute;
    bottom: 0;
    right: 0;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    clip-path: polygon(100% 0, 0% 100%, 100% 100%);

    transition: border 0.2s;

    input {
      height: 50%;
      width: 50%;
      flex: none;

      border: 0;
    }

    input:focus {
      border: 0;
    }

    :focus-within {
      border-right: 4px solid #ebc947;
      border-bottom: 4px solid #ebc947;

      & .line-yellow {
        opacity: 1;
      }

      & .line-blue {
        opacity: 0;
      }
    }
  }
`;
