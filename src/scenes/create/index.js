import React, { useEffect, useState } from "react";

// import { Container } from './styles';

function Create() {
  const [board, setBoard] = useState();

  const config = {  
    x: 14,
    y: 9,
    words: [
      {
        word: 1,
        text: "carrodecorrida",
        y: "2",
        x: "1-14",
        horizontal: true,
        tip: { x: 1, y: 1, value: "Automóvel usado na fórmula 1." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 2,
        text: "nos",
        y: "3",
        x: "5-6",
        horizontal: true,
        tip: { x: 4, y: 3, value: "Eu e eles." },
        arrow: { icon: "to-right", pos: {x: '6px', y: '0'} },
        doubles:[2]
        
      },
      {
        word: 3,
        text: "u",
        y: "3",
        x: "8",
        horizontal: true,
        tip: { x: 7, y: 3, value: "Quinta vogal" },
        arrow: { icon: "to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 4,
        text: "arco",
        y: "3",
        x: "10-13",
        horizontal: true,
        tip: { x: 9, y: 3, value: "Arma indígena." },
        arrow: { icon: "to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 5,
        text: "guindastes",
        y: "4",
        x: "1-10",
        horizontal: true,
        tip: { x: 1, y: 3, value: "Aparelho que ergue grandes pesos (pl.)." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 6,
        text: "in",
        y: "5",
        x: "2-3",
        horizontal: true,
        tip: { x: 1, y: 5, value: "Na moda (gíria)." },
        arrow: { icon: "to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 7,
        text: "air",
        y: "5",
        x: "7-9",
        horizontal: true,
        tip: { x: 6, y: 5, value: "Ar, em inglês." },
        arrow: { icon: "to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 8,
        text: "sais",
        y: "5",
        x: "11-14",
        horizontal: true,
        tip: { x: 10, y: 5, value: "Cristais de banho." },
        arrow: { icon: "to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 9,
        text: "zezedicamargo",
        y: "6",
        x: "2-14",
        horizontal: true,
        tip: { x:1 , y: 6, value: "Parceiro de Luciano (MPB)" },
        arrow: { icon: "to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 10,
        text: "raios",
        y: "7",
        x: "1-5",
        horizontal: true,
        tip: { x: 1, y: 6, value: "Antecedem os trovões." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 11,
        text: "ela",
        y: "7",
        x: "10-12",
        horizontal: true,
        tip: {
          x: 9,
          y: 7,
          value: "Inscrição no banheiro feminino.",
          arrow: { icon: "to-right", pos: {x: '6px', y: '0'} },
        },
      },
      {
        word: 12,
        text: "dr",
        y: "8",
        x: "2-3",
        horizontal: true,
        tip: { x: 1, y: 8, value: "Doutor (abrev.)." },
        arrow: { icon: "to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 13,
        text: "atlas",
        y: "8",
        x: "6-10",
        horizontal: true,
        tip: { x: 5, y: 8, value: "Livro com coleção de mapas." },
        arrow: { icon: "to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 14,
        text: "doo",
        y: "8",
        x: "12-14",
        horizontal: true,
        tip: { x: 11, y: 8, value: "Scooby - (?), cão de desenho animado." },
        arrow: { icon: "to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 15,
        text: "boasnovas",
        y: "9",
        x: "1-8",
        horizontal: true,
        tip: { x: 1, y: 8, value: "Notícias agradáveis." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
        doubles:[8]
      },
      {
        word: 16,
        text: "abater",
        y: "9",
        x: "10-14",
        horizontal: true,
        tip: { x: 9, y: 9, value: "Dar desconto (no preço)." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 17,
        text: "ajuizado",
        y: "2-9",
        x: "2",
        vertical: true,
        tip: { x: 2, y: 1, value: "Prudente." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
        
      },
      {
        word: 18,
        text: "jardineira",
        y: "1-9",
        x: "3",
        vertical: true,
        tip: { x: 2, y: 1, value: "Local onde se colocam plantas." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
        doubles:[1]
      },
      {
        word: 19,
        text: "r",
        y: "2",
        x: "4",
        vertical: true,
        tip: { x: 4, y: 1, value: "Rua (abrev.)." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 20,
        text: "n",
        y: "4",
        x: "4",
        vertical: true,
        tip: { x:4 , y: 3, value: "Ene." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 21,
        text: "zo",
        y: "6-7",
        x: "4",
        vertical: true,
        tip: { x: 4, y: 5, value: "Sílabas de zona." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 22,
        text: "s",
        y: "9",
        x: "4",
        vertical: true,
        tip: { x: 4, y: 8, value: "Formato de estada sinuosa." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 23,
        text: "londres",
        y: "1-7",
        x: "5",
        vertical: true,
        tip: { x: 4, y: 1, value: "Capital da inglaterra." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 24,
        text: "idosa",
        y: "1-4",
        x: "6",
        vertical: true,
        tip: { x:7, y: 1, value: "A mulher da terceira idade." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
        doubles: [3]
      },
      {
        word: 25,
        text: "ao",
        y: "8-9",
        x: "6",
        vertical: true,
        tip: { x:6 , y: 7, value: "Vogais de 'gato'." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 26,
        text: "sai",
        y: "4-6",
        x: "7",
        vertical: true,
        tip: { x: 7,  y: 3, value: "Afasta-se." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 27,
        text: "tv",
        y: "8-9",
        x: "7",
        vertical: true,
        tip: {
          x: 7,
          y: 7,
          value: "Televisão (abrev.).",
        },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 28,
        text: "cuticulas",
        y: "2-9",
        x: "8",
        vertical: true,
        tip: { x: 8, y: 1, value: "Peles removidas pela manicure." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
        doubles:[9]
      },
      {
        word: 29,
        text: "era",
        y: "4-6",
        x: "9",
        vertical: true,
        tip: { x: 9, y: 3, value: "Época período." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 30,
        text: "peras",
        y: "1-4",
        x: "10",
        vertical: true,
        tip: { x: 9, y: 1, value: "Fruta de polpa branca (pl.)." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 31,
        text: "mesa",
        y: "6-9",
        x: "10",
        vertical: true,
        tip: { x: 10, y:5 , value: "Móvel de escritório." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 32,
        text: "sal",
        y: "5-7",
        x: "11",
        vertical: true,
        tip: { x: 11, y: 4, value: "Tempero iodado." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 33,
        text: "bicharada",
        y: "1-9",
        x: "12",
        vertical: true,
        tip: { x: 11, y: 1, value: "Grande número de animais." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 34,
        text: "ido",
        y: "1-3",
        x: "13",
        vertical: true,
        tip: { x: 14, y: 1, value: "Tempo passado." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 35,
        text: "ig",
        y: "5-6",
        x: "13",
        vertical: true,
        tip: { x: 13, y: 4, value: "Igrid Guimarães atriz." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      },
      {
        word: 36,
        text: "ote",
        y: "8-9",
        x: "13",
        vertical: true,
        tip: { x: 13, y: 7, value: "Sufixo de 'filhote'." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
        doubles:[2]
      },
      {
        word: 37,
        text: "isopor",
        y: "4-9",
        x: "14",
        vertical: true,
        tip: { x: 14, y: 3, value: "Utensílio do vendedor de praia." },
        arrow: { icon: "top-to-right", pos: {x: '6px', y: '0'} },
      }
    ]}
    

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
      }else{
        coordinates.x -= 1;
        coordinates.y -= 1;
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
            boardCopy[coordinates.y][coordinates.x[0] + double] = { ...boardCopy[coordinates.y][coordinates.x[0] + double], double: true };
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
            boardCopy[coordinates.y[0] + double][coordinates.x] = { ...boardCopy[coordinates.y[0] + double][coordinates.x], double: true };
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

        console.log(boardCopy[coordinates.y])

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
