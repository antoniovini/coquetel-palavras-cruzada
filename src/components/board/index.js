import React, { useEffect, useState } from 'react';
import { selectedCordinates, fillCell, nextCell, backCell } from '../../utils/board';

import * as S from './styles';

function Board({ game, onSelect, onUpdate, selectedWord }) {
  const [focus, setFocus] = useState({});

  const deleteValue = (evt, x, y) => {
    if(evt.key === "Backspace"){
      setTimeout(() => {
        const back = backCell(game, x, y, selectedWord);
        onUpdate(fillCell(game, "", x, y));
        if(back){
          setFocus(back);
        }
      }, 200);
    }else{
      if(evt.key.length === 1){
        onUpdate(fillCell(game, evt.key, x, y));
        const next = nextCell(game, x, y, selectedWord);
        if(next){
          setFocus(next);
        }
      }
    }
  }

  const select = (word) => {
    onSelect(word);
    setFocus(selectedCordinates(game.data, word));
  }

  useEffect(() => {
    setFocus(selectedCordinates(game.data, selectedWord));
  }, [selectedWord])

  return (
    <S.Container
    >
      {game.data.map((row, rowIndex) => (
        <S.Row
          key={rowIndex}
        >
          { row.map((cell, columnIndex) => {
            return (
              <S.Cell
                key={columnIndex}
                yCount={game.data.length}
                tips={cell.tips}
                onClick={() => {
                  if (cell.tips) {
                    if(cell.tips.length > 1){
                      if (selectedWord) {
                        const nextTip = cell.tips.filter((tip) => tip !== selectedWord);
                        if (nextTip.length > 0) {
                          select(nextTip[0])
                        }
                      } else {
                        select(cell.tips[0]);
                      }
                    }else{
                      if(cell.tips[0] !== selectedWord) {
                        select(cell.tips[0]);
                      }
                    }
                  } else {
                    if (Array.isArray(cell.word)) {
                      const currentExists = cell.word.find(item => item === selectedWord);
                      if (!currentExists) {
                        select(cell.word[0]);
                      }
                    } else {
                      select(cell.word)
                    }
                  }
                }}
                selected={selectedWord && Array.isArray(cell.word) ? cell.word.find(item => item === selectedWord) : selectedWord === cell.word}
              >
                { cell.tips ? cell.tips.map((tip) => (
                  <div className="tip">{tip}</div>
                )) : (
                    <>
                      {cell.arrow && (
                        <S.Arrow 
                          x={cell.arrow.x} 
                          y={cell.arrow.y} 
                          size={cell.arrow.size}
                          src={`/assets/arrows/${cell.arrow.icon}.png`} 
                        />
                      )}
                      <input 
                        maxLength="1" 
                        onKeyDown={(evt) => deleteValue(evt, columnIndex, rowIndex)}
                        // onChange={(evt) => fillValue(evt, columnIndex, rowIndex)}
                        value={game.data[rowIndex][columnIndex].value || ''}
                        ref={ref => {
                          if(!focus){
                            return
                          }

                          if(focus.x === columnIndex  && focus.y === rowIndex && ref) {
                            ref.focus();
                          }
                        }}
                      />
                    </>
                  )}
              </S.Cell>
            )
          })}
        </S.Row>
      ))}
    </S.Container>
  );
}

export default Board;