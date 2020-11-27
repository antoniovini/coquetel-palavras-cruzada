import styled, { css } from 'styled-components';
import config from '../../config.json';

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

  width: ${({yCount}) => ((config.game.boardHeight - (config.game.boardPadding * 2)) / yCount)}px;
  height: ${({yCount}) => (config.game.boardHeight - (config.game.boardPadding * 2)) / yCount}px;
  
  transition: background-color .2s;

  ${({correct}) => correct && css`
    background-color: rgba(39,174,96, .4);
  `};

  ${({tips, selected, correct, failed}) => tips ? css`
    background-color: #213b55;
  ` : selected ? css`
    background-color: rgba(235,201,71,.4);
  ` : correct ? css`
    background-color: rgba(39,174,96, .4);
  ` : failed ? css`
    background-color: rgba(192,57,43, .4);
  ` : css`
    background-color: transparent;
  `};

  .tip{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    cursor: pointer;

    font-weight: bold;
  }

  ${({tips}) => tips ? tips.length > 1 && css`
    .tip:first-child {
      border-bottom: 1px solid white;
    }
  ` : null}

  input{
    flex: 1;
    height: 100%;
    border: 0;
    outline: none;

    border: 1px solid #213B55;

    text-align: center;
    
    border-radius: 0;

    caret-color: transparent;
    background-color: transparent;

    cursor: pointer;

    transition: border .2s;

    font-size: 28px;
  }

  input:focus{
    border: 4px solid #EBC947;
  }
`;

export const Arrow = styled.img`
  position: absolute;
  max-height: 60%;
  max-width: 60%;
  width: ${({size}) => size}px;
  top: ${({y}) => y};
  left: ${({x}) => x};
`;