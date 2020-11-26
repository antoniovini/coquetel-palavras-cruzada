import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/button';
import Timer from '../../components/timer';
import Board from '../../components/board';
import DefaultLayout from '../../layouts/default';

import * as S from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const initialBoard = {
  x: 9,
  y: 6,
  words: [
    { word: 1, text: "empatia" },
    { word: 2, text: "abcde" }
  ],
  data: [
    [{ tips: [1, 2] }, { word: 1, }, { word: 1, }, { word: 1, }, { word: 1 }, { word: 1 }, { word: 1 }, { word: 1 }, { tips: [3] }],
    [{ word: 2 }, { tips: [4, 5]}, {word: 4}, {word: 4}, {word: 4}, {word: 4}, {word: 4}, {word: 4}, { word: 3 }],
    [{ word: 2 }, {word: 5}, {word: 5}, {word: 5}, {word: 5}, {word: 5}, {word: 5}, {word: 5}, { word: 3 }],
    [{ word: 2 }, {}, {}, {}, {}, {}, {}, {}, { word: 3 }],
    [{ word: 2 }, {}, {}, {}, {}, {}, {}, {}, { word: 3 }],
    [{ word: 2 }, {}, {}, {}, {}, {}, {}, {}, { word: 3 }],
  ],
  tips: [
    { word: 1, value: "Testando o jogo (?)." },
    { word: 2, value: "Testando o jogo (?)." }
  ],
}

function Game() {
  const query = useQuery();
  // console.log(query.get('mode'))
  const [board, setBoard] = useState(initialBoard);
  const [selectedWord, setSelectedWord] = useState(null);

  return (
    <S.Container>
      <S.Box>
        <div className='header'>
          <Timer
            time="00:00:00"
          />
          <Button
          >
            Corrigir
          </Button>
          <Button
          >
            Checar
          </Button>
          <Button
          >
            Enquadrar
          </Button>
          <Button
          >
            Solucionar
          </Button>
          <Button
            flat
          >
            <Link to="/difficulty">
              <img src={'/assets/icons/back.png'} height={"20px"} />
            </Link>
          </Button>
        </div>
        <div
          className='board-box'
        >
          <Board
            data={board.data}
            onSelect={(word) => setSelectedWord(word)}
            selectedWord={selectedWord}
          />
        </div>
        <div className="tip-box">
          <Button
            flat
          >
            <img src="/assets/left-arrow.png" height={60} />
          </Button>
          <h2>aaa</h2>
          <Button
            flat
          >
            <img src="/assets/right-arrow.png" height={60} />
          </Button>
        </div>
      </S.Box>
      <h3 className='powered-by'>Powered by Mercadata Digital</h3>
    </S.Container>
  );
}

export default DefaultLayout(Game);