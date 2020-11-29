import React, { useEffect, useState } from "react";

// import { Container } from './styles';

function Create() {
  const [board, setBoard] = useState();

  const config = {
    x: 9,
    y: 6,
    words: [
      {
        word: 1,
        text: "lapiseiras",
        y: "2",
        x: "1-9",
        horizontal: true,
        tip: { x: 1, y: 1, value: "Objeto de escrita que é recarregável" },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
        doubles: [5]
      },
      {
        word: 2,
        text: "aparar",
        y: "1-6",
        x: "3",
        vertical: true,
        tip: { x: 2, y: 1, value: "Cortar a Grama" },
      },
      {
        word: 3,
        text: "adubo",
        y: "2-6",
        x: "2",
        vertical: true,
        tip: { x: 2, y: 1, value: "Fertilizante de Solo" },
      },
      {
        word: 4,
        text: "astral",
        y: "1-6",
        x: "5",
        vertical: true,
        tip: { x: 4, y: 1, value: "De baixo (?): Triste" },
      },
      {
        word: 5,
        text: "bis",
        y: "1-3",
        x: "7",
        vertical: true,
        tip: { x: 6, y: 1, value: "Pedido de repetição ao bom músico" },
      },
      {
        word: 6,
        text: "rondar",
        y: "2-6",
        x: "8",
        vertical: true,
        tip: { x: 8, y: 1, value: "Inspeção policial" },
      },
      {
        word: 7,
        text: "cantar",
        y: "1-6",
        x: "9",
        vertical: true,
        tip: { x: 8, y: 1, value: "Entoar Músicas" },
      },
      {
        word: 8,
        text: "aurora",
        y: "4",
        x: "1-6",
        horizontal: true,
        tip: { x: 1, y: 3, value: "Claridade antes do sol nascer" },
      },
      {
        word: 9,
        text: "od",
        y: "4-5",
        x: "4",
        vertical: true,
        tip: { x: 4, y: 3, value: "Olívio Dutra, político brasileiro" },
      },
      {
        word: 10,
        text: "son",
        y: "3",
        x: "7-9",
        horizontal: true,
        tip: { x: 6, y: 3, value: "Filho em inglês" },
      },
      {
        word: 11,
        text: "ala",
        y: "4-6",
        x: "6",
        vertical: true,
        tip: {
          x: 6,
          y: 3,
          value: "Palavra utilizada no árabe para designar Deus",
        },
      },
      {
        word: 12,
        text: "av",
        y: "5-6",
        x: "7",
        vertical: true,
        tip: { x: 7, y: 4, value: "Ângela Vieira, Atriz" },
      },
      {
        word: 13,
        text: "badalada",
        y: "5",
        x: "2-9",
        horizontal: true,
        tip: { x: 1, y: 5, value: "Som do Sino" },
      },
      {
        word: 14,
        text: "cor",
        y: "6",
        x: "1-3",
        horizontal: true,
        tip: { x: 1, y: 5, value: "Divisão do arco-íris" },
      },
      {
        word: 15,
        text: "lavar",
        y: "6",
        x: "5-9",
        horizontal: true,
        tip: { x: 4, y: 6, value: "Banhar com água" },
      },
    ],
  };

  useEffect(() => {
    const board = createBoard(config.x, config.y);
    const filledBoard = fillBoard(board, config.words);

    setBoard(filledBoard);
  }, []);

  const createBoard = (width, height) => {
    return Array.from(Array(height), () => new Array(width).fill({}))
  };

  const fillBoard = (board, words) => {
    const boardCopy = board;

    for(let i = 0; i < words.length; i++){
      const word = words[i];
      
      const coordinates = { x: word.x, y: word.y };

      if(coordinates.x.includes('-')){
        coordinates.x = coordinates.x.split('-').map((x) => x - 1);
        coordinates.y = coordinates.y - 1;
      }else if (coordinates.y.includes('-')){
        coordinates.x = coordinates.x - 1;
        coordinates.y = coordinates.y.split('-').map((y) => y - 1);
      }

      // fill tips
      const { tip } = word;
      tip.x -= 1;
      tip.y -= 1;

      if(boardCopy[tip.y][tip.x].tips){
        boardCopy[tip.y][tip.x] = { tips: [...boardCopy[tip.y][tip.x].tips, word.word] };
      }else{
        boardCopy[tip.y][tip.x] = { tips: [word.word] };
      }
      
      const doubles = word.doubles;

      // fill words
      // fill in x or y or one cell
      if(Array.isArray(coordinates.x)){
        if(doubles){
          for(let z = 0; z < doubles.length; z++){
            const double = doubles[z] - 1;
            boardCopy[coordinates.y][double] = { ...boardCopy[coordinates.y][double], double: true };
          }
        }

        for(let x = coordinates.x[0]; x <= coordinates.x[1]; x++){
          if(boardCopy[coordinates.y][x].word){
            boardCopy[coordinates.y][x] = { ...boardCopy[coordinates.y][x], word: [...boardCopy[coordinates.y][x].word, word.word] };
          }else{
            boardCopy[coordinates.y][x] = { ...boardCopy[coordinates.y][x], word: [word.word] };
          }
        }
      }else if (Array.isArray(coordinates.y)){
        if(doubles){
          for(let z = 0; z < doubles.length; z++){
            const double = doubles[z] - 1;
            boardCopy[double][coordinates.x] = { ...boardCopy[double][coordinates.x], double: true };
          }
        }

        for(let y = coordinates.y[0]; y <= coordinates.y[1]; y++){
          if(boardCopy[y][coordinates.x].word){
            boardCopy[y][coordinates.x] = { ...boardCopy[y][coordinates.x], word: [...boardCopy[y][coordinates.x].word, word.word] };
          }else{
            boardCopy[y][coordinates.x] = { ...boardCopy[y][coordinates.x], word: [word.word] };
          }
        }
      }else{

        if(doubles){
          boardCopy[coordinates.y][coordinates.x] = { doubles: true };
        }

        if(boardCopy[coordinates.y][coordinates.x].word){
          boardCopy[coordinates.y][coordinates.x] = { ...boardCopy[coordinates.y][coordinates.x], word: [...boardCopy[coordinates.y][coordinates.x].word, word.word]};
        }else{
          boardCopy[coordinates.y][coordinates.x] = { ...boardCopy[coordinates.y][coordinates.x], word: [word.word]};
        }
      }

      // fill arrows
      const { arrow } = word;
      if(arrow){
        const x = Array.isArray(coordinates.x) ? coordinates.x[0] : coordinates.x;
        const y = Array.isArray(coordinates.y) ? coordinates.y[0] : coordinates.y;

        boardCopy[y][x] = {...boardCopy[y][x], arrow: { icon: arrow.icon, x: arrow.pos.x, y: arrow.pos.y }}
      }

    }

    return boardCopy;
  }

  return <div>{JSON.stringify(board)}</div>;
}

export default Create;
