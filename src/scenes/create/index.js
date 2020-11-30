import React, { useEffect, useState } from "react";

// import { Container } from './styles';

function Create() {
  const [board, setBoard] = useState();

<<<<<<< HEAD
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
=======
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
          arrow: { icon: "top-to-right", pos: { x: "6px", y: "0" } },
        },
        {
          word: 2,
          text: "nos",
          y: "3",
          x: "5-6",
          horizontal: true,
          tip: { x: 4, y: 3, value: "Eu e eles." },
          arrow: { icon: "to-right", pos: { y: "45%", x: "5%" }, size: 10 },
          doubles: [6],
        },
        {
          word: 3,
          text: "u",
          y: "3",
          x: "8",
          horizontal: true,
          tip: { x: 7, y: 3, value: "Quinta vogal" },
          arrow: { icon: "to-right", pos: { y: "45%", x: "5%" }, size: 10 },
        },
        {
          word: 4,
          text: "arco",
          y: "3",
          x: "10-13",
          horizontal: true,
          tip: { x: 9, y: 3, value: "Arma indígena." },
          arrow: { icon: "to-right", pos: { y: "45%", x: "5%" }, size: 10 },
        },
        {
          word: 5,
          text: "guindastes",
          y: "4",
          x: "1-10",
          horizontal: true,
          tip: { x: 1, y: 3, value: "Aparelho que ergue grandes pesos (pl.)." },
          arrow: { icon: "top-to-right", pos: { x: "6px", y: "0" } },
        },
        {
          word: 6,
          text: "in",
          y: "5",
          x: "2-3",
          horizontal: true,
          tip: { x: 1, y: 5, value: "Na moda (gíria)." },
          arrow: { icon: "to-right", pos: { y: "45%", x: "5%" }, size: 10 },
        },
        {
          word: 7,
          text: "air",
          y: "5",
          x: "7-9",
          horizontal: true,
          tip: { x: 6, y: 5, value: "Ar, em inglês." },
          arrow: { icon: "to-right", pos: { y: "45%", x: "5%" }, size: 10 },
        },
        {
          word: 8,
          text: "sais",
          y: "5",
          x: "11-14",
          horizontal: true,
          tip: { x: 10, y: 5, value: "Cristais de banho." },
          arrow: { icon: "to-right", pos: { y: "45%", x: "5%" }, size: 10 },
        },
        {
          word: 9,
          text: "zezedicamargo",
          y: "6",
          x: "2-14",
          horizontal: true,
          tip: { x: 1, y: 6, value: "Parceiro de Luciano (MPB)" },
          arrow: { icon: "to-right", pos: { y: "45%", x: "5%" }, size: 10 },
        },
        {
          word: 10,
          text: "raios",
          y: "7",
          x: "1-5",
          horizontal: true,
          tip: { x: 1, y: 6, value: "Antecedem os trovões." },
          arrow: { icon: "top-to-right", pos: { x: "6px", y: "0" } },
        },
        {
          word: 11,
          text: "ela",
          y: "7",
          x: "10-12",
          horizontal: true,
          tip: { x: 9, y: 7, value: "Inscrição no banheiro feminino." },
          arrow: { icon: "to-right", pos: { y: "45%", x: "5%" }, size: 10 },
        },
        {
          word: 12,
          text: "dr",
          y: "8",
          x: "2-3",
          horizontal: true,
          tip: { x: 1, y: 8, value: "Doutor (abrev.)." },
          arrow: { icon: "to-right", pos: { y: "45%", x: "5%" }, size: 10 },
        },
        {
          word: 13,
          text: "atlas",
          y: "8",
          x: "6-10",
          horizontal: true,
          tip: { x: 5, y: 8, value: "Livro com coleção de mapas." },
          arrow: { icon: "to-right", pos: { y: "45%", x: "5%" }, size: 10 },
        },
        {
          word: 14,
          text: "doo",
          y: "8",
          x: "12-14",
          horizontal: true,
          tip: { x: 11, y: 8, value: "Scooby - (?), cão de desenho animado." },
          arrow: { icon: "to-right", pos: { y: "45%", x: "5%" }, size: 10 },
        },
        {
          word: 15,
          text: "boasnovas",
          y: "9",
          x: "1-8",
          horizontal: true,
          tip: { x: 1, y: 8, value: "Notícias agradáveis." },
          arrow: { icon: "top-to-right", pos: { x: "6px", y: "0" } },
          doubles: [8],
        },
        {
          word: 16,
          text: "abater",
          y: "9",
          x: "10-14",
          horizontal: true,
          tip: { x: 9, y: 9, value: "Dar desconto (no preço)." },
          arrow: { icon: "to-right", pos: { y: "45%", x: "5%" }, size: 10 },
        },
        {
          word: 17,
          text: "ajuizado",
          y: "2-9",
          x: "2",
          vertical: true,
          tip: { x: 2, y: 1, value: "Prudente." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
        {
          word: 18,
          text: "jardineira",
          y: "1-9",
          x: "3",
          vertical: true,
          tip: { x: 2, y: 1, value: "Local onde se colocam plantas." },
          arrow: { icon: "left-to-bottom", pos: { x: "-2%", y: "8%" } },
          doubles: [1],
        },
        {
          word: 19,
          text: "r",
          y: "2",
          x: "4",
          vertical: true,
          tip: { x: 4, y: 1, value: "Rua (abrev.)." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
        {
          word: 20,
          text: "n",
          y: "4",
          x: "4",
          vertical: true,
          tip: { x: 4, y: 3, value: "Ene." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
        {
          word: 21,
          text: "zo",
          y: "6-7",
          x: "4",
          vertical: true,
          tip: { x: 4, y: 5, value: "Sílabas de zona." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
        {
          word: 22,
          text: "s",
          y: "9",
          x: "4",
          vertical: true,
          tip: { x: 4, y: 8, value: "Formato de estada sinuosa." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
        {
          word: 23,
          text: "londres",
          y: "1-7",
          x: "5",
          vertical: true,
          tip: { x: 4, y: 1, value: "Capital da inglaterra." },
          arrow: { icon: "left-to-bottom", pos: { x: "-2%", y: "8%" } },
        },
        {
          word: 24,
          text: "idosa",
          y: "1-4",
          x: "6",
          vertical: true,
          tip: { x: 7, y: 1, value: "A mulher da terceira idade." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
          doubles: [3],
        },
        {
          word: 25,
          text: "ao",
          y: "8-9",
          x: "6",
          vertical: true,
          tip: { x: 6, y: 7, value: "Vogais de 'gato'." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
        {
          word: 26,
          text: "sai",
          y: "4-6",
          x: "7",
          vertical: true,
          tip: { x: 7, y: 3, value: "Afasta-se." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
        {
          word: 27,
          text: "tv",
          y: "8-9",
          x: "7",
          vertical: true,
          tip: { x: 7, y: 7, value: "Televisão (abrev.)." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
        {
          word: 28,
          text: "cuticulas",
          y: "2-9",
          x: "8",
          vertical: true,
          tip: { x: 8, y: 1, value: "Peles removidas pela manicure." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
          doubles: [9],
        },
        {
          word: 29,
          text: "era",
          y: "4-6",
          x: "9",
          vertical: true,
          tip: { x: 9, y: 3, value: "Época período." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
        {
          word: 30,
          text: "peras",
          y: "1-4",
          x: "10",
          vertical: true,
          tip: { x: 9, y: 1, value: "Fruta de polpa branca (pl.)." },
          arrow: { icon: "left-to-bottom", pos: { x: "-2%", y: "8%" } },
          doubles:[1]
        },
        {
          word: 31,
          text: "mesa",
          y: "6-9",
          x: "10",
          vertical: true,
          tip: { x: 10, y: 5, value: "Móvel de escritório." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
        {
          word: 32,
          text: "sal",
          y: "5-7",
          x: "11",
          vertical: true,
          tip: { x: 11, y: 4, value: "Tempero iodado." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
        {
          word: 33,
          text: "bicharada",
          y: "1-9",
          x: "12",
          vertical: true,
          tip: { x: 11, y: 1, value: "Grande número de animais." },
          arrow: { icon: "left-to-bottom", pos: { x: "-2%", y: "8%" } },
        },
        {
          word: 34,
          text: "ido",
          y: "1-3",
          x: "13",
          vertical: true,
          tip: { x: 14, y: 1, value: "Tempo passado." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
        {
          word: 35,
          text: "ig",
          y: "5-6",
          x: "13",
          vertical: true,
          tip: { x: 13, y: 4, value: "Igrid Guimarães atriz." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
        {
          word: 36,
          text: "ote",
          y: "8-9",
          x: "13",
          vertical: true,
          tip: { x: 13, y: 7, value: "Sufixo de 'filhote'." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
          doubles: [9],
        },
        {
          word: 37,
          text: "isopor",
          y: "4-9",
          x: "14",
          vertical: true,
          tip: { x: 14, y: 3, value: "Utensílio do vendedor de praia." },
          arrow: { icon: "to-bottom", pos: { x: "45%", y: "5%" } ,size:7.5 },
        },
      ]}
    
>>>>>>> 82796f2627d442accd464909f3860b1a00f2a5b9

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
<<<<<<< HEAD
=======

>>>>>>> 82796f2627d442accd464909f3860b1a00f2a5b9
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
<<<<<<< HEAD
=======

>>>>>>> 82796f2627d442accd464909f3860b1a00f2a5b9
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
