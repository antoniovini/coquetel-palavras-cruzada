import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/button";
import Timer from "../../components/timer";
import Board from "../../components/board";
import DefaultLayout from "../../layouts/default";

import { MdPause, MdPlayArrow } from "react-icons/md";

import * as S from "./styles";
import {
  checkWord,
  fillLetter,
  fillWord,
  getWordFromBoard,
} from "../../utils/board";

import games from "../../games";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Game() {
  const query = useQuery();

  const [board, setBoard] = useState(
    games[query.get("mode")][
      Math.floor(Math.random() * games[query.get("mode")].length)
    ]
  );
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

  const onUpdate = (board) => {
    setBoard(board);
  };

  const onCorrect = () => {
    setBoard(fillWord(board, selectedWord));
    if (selectedWord < board.words.length) {
      setSelectedWord((word) => word + 1);
    } else {
      setSelectedWord(1);
    }
  };

  const onSolution = () => {
    const words = board.words;
    words.map((word) => {
      const copy = { ...fillWord(board, word.word) };
      setBoard(copy);
    });
  };

  const onCheck = () => {
    const typedWord = getWordFromBoard(board.data, selectedWord);
    setBoard(checkWord(board, selectedWord, typedWord.toLowerCase()));
    if (selectedWord < board.words.length) {
      setSelectedWord((word) => word + 1);
    } else {
      setSelectedWord(1);
    }
  };

  const onTip = () => {
    setBoard(fillLetter(board, selectedWord));
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
          <Button onClick={onCorrect}>Corrigir</Button>
          <Button onClick={onCheck}>Checar</Button>
          <Button onClick={onTip}>Dica</Button>
          <Button onClick={onSolution}>Solução</Button>
          <Button flat>
            <Link to="/difficulty">
              <img src={"/assets/icons/back.png"} height={"20px"} />
            </Link>
          </Button>
        </div>
        <div className="board-box">
          {board && (
            <Board
              game={board}
              onSelect={(word) => setSelectedWord(word)}
              selectedWord={selectedWord}
              onUpdate={onUpdate}
            />
          )}
        </div>

        <div className="tip-box">
          {board && (
            <>
              <Button
                flat
                type="button"
                onClick={() => {
                  if (selectedWord === 1) {
                    setSelectedWord(board.words.length);
                  } else {
                    setSelectedWord(selectedWord - 1);
                  }
                }}
              >
                <img src="/assets/left-arrow.png" height={60} />
              </Button>
              <h2>
                {`${selectedWord}. ` +
                  board.words.filter((word) => word.word === selectedWord)[0]
                    .tip.value}
              </h2>
              <Button
                flat
                type="button"
                onClick={() => {
                  if (selectedWord === board.words.length) {
                    setSelectedWord(1);
                  } else {
                    setSelectedWord(selectedWord + 1);
                  }
                }}
              >
                <img src="/assets/right-arrow.png" height={60} />
              </Button>
            </>
          )}
        </div>
      </S.Box>
      <h3 className="powered-by">Powered by Mercadata Digital</h3>
    </S.Container>
  );
}

export default DefaultLayout(Game);
