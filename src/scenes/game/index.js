import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/button";
import Timer from "../../components/timer";
import Board from "../../components/board";
import DefaultLayout from "../../layouts/default";

import { MdPause, MdPlayArrow } from "react-icons/md";

import * as S from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const initialBoard = {
  x: 9,
  y: 6,
  words: [
    { word: 1, text: "lapiseira", y: "2", x: "1-9" },
    { word: 2, text: "aparar", y: "3", x: "1-6" },
    { word: 3, text: "adubo", y: "2-6", x: "2" },
    { word: 4, text: "astral", y: "1-6", x: "4" },
    { word: 5, text: "bis", y: "1-3", x: "7" },
    { word: 6, text: "rondar", y: "2-6", x: "8" },
    { word: 7, text: "cantar", y: "1-6", x: "9" },
    { word: 8, text: "aurora", y: "3", x: "1-6" },
    { word: 9, text: "od", y: "3-5", x: "4" },
    { word: 10, text: "son", y: "3", x: "7-9" },
    { word: 11, text: "ala", y: "4-6", x: "6" },
    { word: 12, text: "av", y: "5-6", x: "7" },
    { word: 13, text: "badalada", y: "6", x: "2-9" },
    { word: 14, text: "cor", y: "6", x: "1-3" },
    { word: 15, text: "lavar", y: "6", x: "4-9" },
  ],
  data: [
    [
      { tips: [1] },
      { tips: [2, 3] },
      { word: 2 },
      { tips: [4] },
      { word: 4 },
      { tips: [5] },
      { word: 5 },
      { tips: [6, 7] },
      { word: 7 },
    ],
    [
      { word: 1 },
      { word: [1, 3] },
      { word: [2, 1] },
      { word: 1 },
      { word: [1, 4] },
      { word: 1 },
      { word: [1, 5] },
      { word: [1, 6] },
      { word: [1, 7] },
    ],
    [
      { tips: [8] },
      { word: 3 },
      { word: 2 },
      { tips: [9] },
      { word: 4 },
      { tips: [10, 11] },
      { word: [5, 10] },
      { word: [6, 10] },
      { word: [7, 10] },
    ],
    [
      { word: 8 },
      { word: [3, 8] },
      { word: [2, 8] },
      { word: [8, 9] },
      { word: [4, 8] },
      { word: [8, 11] },
      { tips: [12] },
      { word: 6 },
      { word: 7 },
    ],
    [
      { tips: [13, 14] },
      { word: [13, 3] },
      { word: [13, 2] },
      { word: [13, 9] },
      { word: [13, 4] },
      { word: [13, 11] },
      { word: [13, 12] },
      { word: [13, 6] },
      { word: [13, 7] },
    ],
    [
      { word: 14 },
      { word: [14, 3] },
      { word: [14, 2] },
      { tips: [15] },
      { word: [15, 4] },
      { word: [15, 11] },
      { word: [15, 12] },
      { word: [15, 6] },
      { word: [15, 7] },
    ],
  ],
  tips: [
    { word: 1, value: "Objeto de escrita que é recarregável" },
    { word: 2, value: "Cortar a Grama" },
    { word: 3, value: "Fertilizante de Solo" },
    { word: 4, value: "De baixo (?): Triste" },
    { word: 5, value: "Pedido de repetição ao bom músico" },
    { word: 6, value: "Inspeção policial" },
    { word: 7, value: "Entoar Músicas" },
    { word: 8, value: "Claridade antes do sol nascer" },
    { word: 9, value: "Olívio Dutra, político brasileiro" },
    { word: 10, value: "Olívio Dutra, político brasileiro" },
    { word: 11, value: "Olívio Dutra, político brasileiro" },
    { word: 12, value: "Ângela Vieira, Atriz" },
    { word: 13, value: "Som do Sino" },
    { word: 14, value: "Divisão do arco-íris" },
    { word: 15, value: "Banhar com água" },
  ],
};

function Game() {
  const query = useQuery();
  // console.log(query.get('mode'))
  const [board, setBoard] = useState(initialBoard);
  const [selectedWord, setSelectedWord] = useState(1);

  //Timer
  const [time, setTime] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (stop) {
      return null;
    } else {
      let tempo = setInterval(() => {
        setTime((old) => old + 1);
      }, 1000);

      return () => {
        clearInterval(tempo);
      };
    }
  }, [stop]);

  const minutes =
    Math.floor(time / 60) < 10
      ? "0" + Math.floor(time / 60)
      : Math.floor(time / 60);
  const seconds = time % 60 < 10 ? "0" + (time % 60) : time % 60;

  if (time === 3600) {
    setTime(0);
  }

  const timer = `${minutes}:${seconds}`;

  // Timer controls
  const pause = () => {
    localStorage.setItem("@time", time);
    setStop(true);
  };

  const start = () => {
    setTime(Number(localStorage.getItem("@time")));
    setStop(false);
  };

  return (
    <S.Container>
      <S.Box>
        <div className="header">
          <Timer time={timer}>
            {!stop ? (
              <MdPause
                size={30}
                onClick={() => pause()}
                className="startstop"
              />
            ) : (
              <MdPlayArrow
                size={30}
                onClick={() => start()}
                className="startstop"
              />
            )}
          </Timer>
          <Button>Corrigir</Button>
          <Button>Checar</Button>
          <Button>Dica</Button>
          <Button>Solução</Button>
          <Button flat>
            <Link to="/difficulty">
              <img src={"/assets/icons/back.png"} height={"20px"} />
            </Link>
          </Button>
        </div>
        <div className="board-box">
          <Board
            data={board.data}
            onSelect={(word) => setSelectedWord(word)}
            selectedWord={selectedWord}
          />
        </div>
        <div className="tip-box">
          <Button
            flat
            type="button"
            onClick={() => {
              console.log(selectedWord);
              if (selectedWord === 1) {
                setSelectedWord(initialBoard.words.length);
              } else {
                setSelectedWord(selectedWord - 1);
              }
            }}
          >
            <img src="/assets/left-arrow.png" height={60} />
          </Button>
          <h2>
            {`${selectedWord}. ` +
              initialBoard.tips.filter((tip) => tip.word === selectedWord)[0]
                .value}
          </h2>
          <Button
            flat
            type="button"
            onClick={() => {
              if (selectedWord === initialBoard.words.length) {
                setSelectedWord(1);
              } else {
                setSelectedWord(selectedWord + 1)
              }
            }}
          >
            <img src="/assets/right-arrow.png" height={60} />
          </Button>
        </div>
      </S.Box>
      <h3 className="powered-by">Powered by Mercadata Digital</h3>
    </S.Container>
  );
}

export default DefaultLayout(Game);
