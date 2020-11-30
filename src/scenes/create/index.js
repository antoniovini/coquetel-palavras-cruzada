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
        text: "descalcificação",
        y: "2",
        x: "1-14",
        horizontal: true,
        tip: { x: 1, y: 1, value: "Processo associado à osteoporose" },
        doubles: [5],
      },
      {
        word: 2,
        text: "ator",
        y: "3",
        x: "4-7",
        horizontal: true,
        tip: { x: 3, y: 3, value: "Intérprete" }
      },
      {
        word: 3,
        text: "romã",
        y: "3",
        x: "9-12",
        horizontal: true,
        tip: { x: 8, y: 3, value: "Fruto ligado à fecundidade (Ant.)" }
      },
      {
        word: 4,
        text: "erratica",
        y: "2",
        x: "2-9",
        horizontal: true,
        tip: {
          x: 1,
          y: 4,
          value: "Composição de Caetano Veloso gravada por Gal Costa",
        }
      },
      {
        word: 5,
        text: "root",
        y: "4",
        x: "11-14",
        horizontal: true,
        tip: { x: 10, y: 4, value: "Raíz em inglês" }
      },
      {
        word: 6,
        text: "canon",
        y: "5",
        x: "1-4",
        horizontal: true,
        tip: { x: 1, y: 3, value: "Modelo religioso" },
        doubles: [1],
      },
      {
        word: 7,
        text: "ur",
        y: "5",
        x: "13-14",
        horizontal: true,
        tip: { x: 12, y: 5, value: "Pátria de Abraão (Bíblia)" }
      },
      {
        word: 8,
        text: "tia",
        y: "6",
        x: "2-4",
        horizontal: true,
        tip: { x: 1, y: 6, value: "(?) Ciata, matriarca do samba" }
      },
      {
        word: 9,
        text: "narrativa",
        y: "6",
        x: "6-14",
        horizontal: true,
        tip: {
          x: 5,
          y: 6,
          value:
            "Forma literária que privilegia a descrição de eventos reais e imaginários",
        }
      },
      {
        word: 10,
        text: "une",
        y: "7",
        x: "4-6",
        horizontal: true,
        tip: { x: 3, y: 7, value: "Entidade opositora do regime militar" }
      },
      {
        word: 11,
        text: "sit",
        y: "7",
        x: "12-14",
        horizontal: true,
        tip: { x: 12, y: 8, value: "Sentar em inglês" }
      },
      {
        word: 12,
        text: "arbitragem",
        y: "8",
        x: "2-11",
        horizontal: true,
        tip: { x: 1, y: 8, value: "Ativivade amadora ligada ao futebol" }
      },
      {
        word: 13,
        text: "alfa",
        y: "9",
        x: "1-4",
        horizontal: true,
        tip: {
          x: 1,
          y: 8,
          value: "Partícula (?), tipo de emissão radioativa",
        }
      },
      {
        word: 14,
        text: "ecleticos",
        y: "9",
        x: "6-14",
        horizontal: true,
        tip: { x: 5, y: 9, value: "Que apreciam músicas diversas" }
      },
      {
        word: 15,
        text: "eventual",
        y: "2-9",
        x: "2",
        vertical: true,
        tip: { x: 2, y: 1, value: "Casual; fortuito" }
      },
      {
        word: 16,
        text: "roi",
        y: "4-6",
        x: "3",
        vertical: true,
        tip: { x: 3, y: 3, value: "Alimenta-se como os ratos" }
      },
      {
        word: 17,
        text: "carnauba",
        y: "2-9",
        x: "4",
        vertical: true,
        tip: { x: 4, y: 1, value: "Árvore símbolo do Piauí" }
      },
      {
        word: 18,
        text: "malta",
        y: "1-4",
        x: "5",
        vertical: true,
        tip: { x: 4, y: 1, value: "País que integra a união europeia desse 2004" },
        doubles: [2]
      },
      {
        word: 19,
        text: "cotonete",
        y: "2-9",
        x: "6",
        vertical: true,
        tip: { x: 6, y: 1, value: "Haste flexível para limpeza de ouvido" }
      },
      {
        word: 20,
        text: "birita",
        y: "1-6",
        x: "7",
        vertical: true,
        tip: { x: 8, y: 1, value: "Cachaça (bras.)" }
      },
      {
        word: 21,
        text: "rc",
        y: "8-9",
        x: "7",
        vertical: true,
        tip: { x: 7, y: 7, value: "Ray  Conniff maestro dos EUA" }
      },
      {
        word: 21,
        text: "f",
        y: "2",
        x: "8",
        vertical: true,
        tip: { x: 8, y: 1, value: "Flúor (símbolo)" }
      },
      {
        word: 22,
        text: "real",
        y: "6-9",
        x: "8",
        vertical: true,
        tip: { x: 8, y: 5, value: "(?) Madrid, time de Kaká em 2012" }
      },
      {
        word: 23,
        text: "pira",
        y: "1-4",
        x: "9",
        vertical: true,
        tip: { x: 10, y: 1, value: "Um dos símbolos olímpicos" }
      },
      {
        word: 24,
        text: "ge",
        y: "8-9",
        x: "9",
        vertical: true,
        tip: { x: 9, y: 7, value: "Germânio (símbolo)" }
      },
      {
        word: 25,
        text: "manet",
        y: "5-9",
        x: "10",
        vertical: true,
        tip: { x: 9, y: 5, value: "Pintor francês de 'A Sacada'" }
      },
      {
        word: 26,
        text: "termas",
        y: "6-1",
        x: "11",
        vertical: true,
        tip: { x: 11, y: 7, value: "Balneário" }
      },
      {
        word: 27,
        text: "mi",
        y: "8-9",
        x: "11",
        vertical: true,
        tip: { x: 11, y: 7, value: "12ª letra grega" }
      },
      {
        word: 28,
        text: "ação",
        y: "1-4",
        x: "12",
        vertical: true,
        tip: { x: 13, y: 1, value: "Ato" }
      },
      {
        word: 29,
        text: "ouvido",
        y: "4-9",
        x: "13",
        vertical: true,
        tip: { x: 13, y: 3, value: "Fone de (?), acessório do walkman" }
      },
      {
        word: 30,
        text: "contratos",
        y: "1-9",
        x: "14",
        vertical: true,
        tip: { x: 13, y: 1, value: "Acordos com validade legal" }
      },
    ],
  }

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
