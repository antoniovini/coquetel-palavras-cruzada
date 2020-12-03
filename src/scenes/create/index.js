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
        arrow: { icon: "top-to-right", pos: { x: "10%", y: "5%" }, size: 8 },
      },
      {
        word: 2,
        text: "ator",
        y: "3",
        x: "4-7",
        horizontal: true,
        tip: { x: 3, y: 3, value: "Intérprete" },
        arrow: { icon: "to-right", pos: { x: "3%", y: "10%" }, size: 8 },
      },
      {
        word: 3,
        text: "romã",
        y: "3",
        x: "9-12",
        horizontal: true,
        tip: { x: 8, y: 3, value: "Fruto ligado à fecundidade (Ant.)" },
        arrow: { icon: "to-right", pos: { x: "3%", y: "45%" }, size: 8 },
      },
      {
        word: 4,
        text: "erratica",
        y: "4",
        x: "2-9",
        horizontal: true,
        tip: {
          x: 1,
          y: 4,
          value: "Composição de Caetano Veloso gravada por Gal Costa",
        },
        arrow: { icon: "to-right", pos: { x: "3%", y: "25%" }, size: 8 },
      },
      {
        word: 5,
        text: "root",
        y: "4",
        x: "11-14",
        horizontal: true,
        tip: { x: 10, y: 4, value: "Raíz em inglês" },
        arrow: { icon: "to-right", pos: { x: "3%", y: "20%" }, size: 8 },
      },
      {
        word: 6,
        text: "canon",
        y: "5",
        x: "1-4",
        horizontal: true,
        tip: { x: 1, y: 4, value: "Modelo religioso" },
        doubles: [1],
        arrow: { icon: "top-to-right", pos: { x: "10%", y: "0%" }, size: 8 },
      },
      {
        word: 7,
        text: "ur",
        y: "5",
        x: "13-14",
        horizontal: true,
        tip: { x: 12, y: 5, value: "Pátria de Abraão (Bíblia)" },
        arrow: { icon: "to-right", pos: { x: "3%", y: "45%" }, size: 8 },
      },
      {
        word: 8,
        text: "tia",
        y: "6",
        x: "2-4",
        horizontal: true,
        tip: { x: 1, y: 6, value: "(?) Ciata, matriarca do samba" },
        arrow: { icon: "to-right", pos: { x: "3%", y: "45%" }, size: 8 },
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
        },
        arrow: { icon: "to-right", pos: { x: "3%", y: "45%" }, size: 8 },
      },
      {
        word: 10,
        text: "une",
        y: "7",
        x: "4-6",
        horizontal: true,
        tip: { x: 3, y: 7, value: "Entidade opositora do regime militar" },
        arrow: { icon: "to-right", pos: { x: "3%", y: "45%" }, size: 8 },
      },
      {
        word: 11,
        text: "sit",
        y: "7",
        x: "12-14",
        horizontal: true,
        tip: { x: 12, y: 8, value: "Sentar em inglês" },
        arrow: {
          icon: "bottom-to-right",
          pos: { x: "55%", y: "0%" },
          size: 8,
        },
      },
      {
        word: 12,
        text: "arbitragem",
        y: "8",
        x: "2-11",
        horizontal: true,
        tip: { x: 1, y: 8, value: "Ativivade amadora ligada ao futebol" },
        arrow: { icon: "to-right", pos: { x: "3%", y: "20%" }, size: 8.5 },
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
        },
        arrow: { icon: "top-to-right", pos: { x: "10%", y: "0" }, size: 8 },
      },
      {
        word: 14,
        text: "ecleticos",
        y: "9",
        x: "6-14",
        horizontal: true,
        tip: { x: 5, y: 9, value: "Que apreciam músicas diversas" },
        arrow: { icon: "to-right", pos: { x: "3%", y: "45%" }, size: 8 },
      },
      {
        word: 15,
        text: "eventual",
        y: "2-9",
        x: "2",
        vertical: true,
        tip: { x: 2, y: 1, value: "Casual; fortuito" },
        arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" }, size: 7.5 },
      },
      {
        word: 16,
        text: "roi",
        y: "4-6",
        x: "3",
        vertical: true,
        tip: { x: 3, y: 3, value: "Alimenta-se como os ratos" },
        arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" }, size: 7.5 },
      },
      {
        word: 18,
        text: "malta",
        y: "1-4",
        x: "5",
        vertical: true,
        tip: {
          x: 4,
          y: 1,
          value: "País que integra a união europeia desse 2004",
        },
        doubles: [2],
        arrow: {
          icon: "left-to-bottom",
          pos: { x: "5%", y: "10%" },
          size: 25,
        },
      },
      {
        word: 17,
        text: "carnauba",
        y: "2-9",
        x: "4",
        vertical: true,
        tip: { x: 4, y: 1, value: "Árvore símbolo do Piauí" },
        arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" }, size: 7.5 },
      },
      {
        word: 19,
        text: "cotonete",
        y: "2-9",
        x: "6",
        vertical: true,
        tip: { x: 6, y: 1, value: "Haste flexível para limpeza de ouvido" },
        arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" }, size: 7.5 },
      },
      {
        word: 20,
        text: "birita",
        y: "1-6",
        x: "7",
        vertical: true,
        tip: { x: 8, y: 1, value: "Cachaça (bras.)" },
        arrow: {
          icon: "right-to-bottom",
          pos: { x: "50%", y: "10%" },
          size: 25,
        },
      },
      {
        word: 21,
        text: "rc",
        y: "8-9",
        x: "7",
        vertical: true,
        tip: { x: 7, y: 7, value: "Ray  Conniff maestro dos EUA" },
        arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" }, size: 7.5 },
      },
      {
        word: 22,
        text: "f",
        y: "2",
        x: "8",
        vertical: true,
        tip: { x: 8, y: 1, value: "Flúor (símbolo)" },
        arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" }, size: 7.5 },
      },
      {
        word: 23,
        text: "real",
        y: "6-9",
        x: "8",
        vertical: true,
        tip: { x: 8, y: 5, value: "(?) Madrid, time de Kaká em 2012" },
        arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" }, size: 7.5 },
      },
      {
        word: 24,
        text: "pira",
        y: "1-4",
        x: "9",
        vertical: true,
        tip: { x: 10, y: 1, value: "Um dos símbolos olímpicos" },
        arrow: {
          icon: "right-to-bottom",
          pos: { x: "50%", y: "10%" },
          size: 25,
        },
      },
      {
        word: 25,
        text: "ge",
        y: "8-9",
        x: "9",
        vertical: true,
        tip: { x: 9, y: 7, value: "Germânio (símbolo)" },
        arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" }, size: 7.5 },
      },
      {
        word: 26,
        text: "manet",
        y: "5-9",
        x: "10",
        vertical: true,
        tip: { x: 9, y: 5, value: "Pintor francês de 'A Sacada'" },
        arrow: {
          icon: "left-to-bottom",
          pos: { x: "-2%", y: "8%" },
          size: 25,
        },
      },
      {
        word: 27,
        text: "mi",
        y: "8-9",
        x: "11",
        vertical: true,
        tip: { x: 11, y: 7, value: "12ª letra grega" },
        arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" }, size: 7.5 },
      },
      {
        word: 28,
        text: "ação",
        y: "1-4",
        x: "12",
        vertical: true,
        tip: { x: 13, y: 1, value: "Ato" },
        arrow: {
          icon: "right-to-bottom",
          pos: { x: "50%", y: "10%" },
          size: 25,
        },
      },
      {
        word: 29,
        text: "ouvido",
        y: "4-9",
        x: "13",
        vertical: true,
        tip: { x: 13, y: 3, value: "Fone de (?), acessório do walkman" },
        arrow: { icon: "to-bottom", pos: { x: "45%", y: "10" }, size: 7.5 },
      },
      {
        word: 30,
        text: "contratos",
        y: "1-9",
        x: "14",
        vertical: true,
        tip: { x: 13, y: 1, value: "Acordos com validade legal" },
        arrow: {
          icon: "left-to-bottom",
          pos: { x: "10%", y: "10%" },
          size: 25,
        },
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

        boardCopy[y][x] = {...boardCopy[y][x], arrow: { icon: arrow.icon, x: arrow.pos.x, y: arrow.pos.y , size: arrow.size}}
      }

    }

    return boardCopy;
  }

  return <div>{JSON.stringify(board)}</div>;
}

export default Create;
