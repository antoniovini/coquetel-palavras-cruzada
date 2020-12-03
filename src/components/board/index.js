import React, { useEffect, useState } from 'react';
import { selectedCordinates, fillCell, nextCell, backCell } from '../../utils/board';

import * as S from './styles';

function Board({ game, onSelect, onUpdate, selectedWord }) {
  const [focus, setFocus] = useState({});

  const onChange = (evt, x, y, z) => {
    if(evt.target.value.length === 1) {
      onUpdate(fillCell(game, evt.target.value, x, y, z));
    }
  }

  const updateValue = (evt, x, y, z) => {
    // const currentCode = evt.which || evt.code;
    // let currentKey = evt.key;
    // if (!currentKey) {
    //   currentKey = String.fromCharCode(currentCode);
    // }

    const getKeyCode = function(str){
      return str.charCodeAt(str.length);
    }

    let charKeyCode = evt.keyCode || evt.which;
    
    setTimeout(function(){
      //for android chrome keycode fix
      if(charKeyCode == 0 || charKeyCode == 229){
        if(Number.isInteger(z)){
          if(z === 0){
            const input = document.getElementById(`input_${x}_${y}_1`);
            const { value } = input;
            
            charKeyCode = getKeyCode(value);
          }else{
            const input = document.getElementById(`input_${x}_${y}_2`);
            const { value } = input;
            
            charKeyCode = getKeyCode(value);
          }
        }else{
          const input = document.getElementById(`input_${x}_${y}`);
          const { value } = input;
          charKeyCode = getKeyCode(value);
        }
      }

      const key = String.fromCharCode(charKeyCode);

      if(charKeyCode === 8 || key === " "){
        setTimeout(() => {
          const back = backCell(game, x, y, z, selectedWord);
          onUpdate(fillCell(game, "", x, y, z));
          setTimeout(() => {
            if(back){
              setFocus(back);
            }
          }, 200);
        }, 200);
      }else{
        if(key.length <= 1){
          // onUpdate(fillCell(game, key, x, y, z));
          const next = nextCell(game, x, y, z, selectedWord);
          setTimeout(() => {
            if(next){
              setFocus(next);
            }
          }, 200);
        }
      }
    }, 200);
  }

  const select = (word) => {
    onSelect(word);
    setFocus(selectedCordinates(game.data, word));
  }

  useEffect(() => {
    setFocus(selectedCordinates(game.data, selectedWord));
  }, [selectedWord])

  useEffect(() => {alert(JSON.stringify(focus))}, [focus])

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
                correct={cell.correct}
                failed={cell.failed}
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
                      { cell.double ? (
                        <S.Double className="double">
                          <svg className="line-blue" style={{width: '100%', height: '100%'}}>
                              <line  x1="0" y1="100%" x2="100%" y2="0" />
                          </svg>
                          <svg className="line-yellow" style={{width: '100%', height: '100%'}}>
                              <line  x1="0" y1="100%" x2="100%" y2="0" />
                          </svg>
                          <div className="top">
                            <input 
                              onChange={(evt) => onChange(evt, columnIndex, rowIndex, 0)}
                              id={`input_${columnIndex}_${rowIndex}_1`}
                              maxLength="1"
                              value={game.data[rowIndex][columnIndex].value ? game.data[rowIndex][columnIndex].value[0] || '' : ''}
                              // ref={ref => {
                              //   if(!focus){
                              //     return
                              //   }
    
                              //   if(focus.x === columnIndex  && focus.y === rowIndex && focus.z === 0 && ref) {
                              //     ref.focus();
                              //   }
                              // }}
                              onKeyDown={(evt) => {
                                if(!cell.correct){
                                  updateValue(evt, columnIndex, rowIndex, 0);
                                }
                              }}
                              // value={game.data[rowIndex][columnIndex].value ? game.data[rowIndex][columnIndex].value[0] || '' : ''}
                              ref={ref => {
                                if(!focus){
                                  return
                                }
    
                                if(focus.x === columnIndex  && focus.y === rowIndex && focus.z === 0 && ref) {
                                  ref.focus();
                                }
                              }}
                            />
                          </div>
                          <div className="bottom">
                            <input
                              onChange={(evt) => onChange(evt, columnIndex, rowIndex, 1)}
                              id={`input_${columnIndex}_${rowIndex}_2`}
                              maxLength="1"
                              onKeyDown={(evt) => {
                                if(!cell.correct){
                                  updateValue(evt, columnIndex, rowIndex, 1);
                                }
                              }}
                              value={game.data[rowIndex][columnIndex].value ? game.data[rowIndex][columnIndex].value[1] || '' : ''}
                              ref={ref => {
                                if(!focus){
                                  return
                                }
    
                                if(focus.x === columnIndex  && focus.y === rowIndex && focus.z === 1 && ref) {
                                  ref.focus();
                                }
                              }}
                            />
                          </div>
                        </S.Double>
                      ) : (
                        <input
                          onChange={(evt) => onChange(evt, columnIndex, rowIndex)}
                          id={`input_${columnIndex}_${rowIndex}`}
                          className="single-input" 
                          maxLength="1" 
                          onKeyDown={(evt) => {
                            if(!cell.correct){
                              updateValue(evt, columnIndex, rowIndex)
                            }
                          }}
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
                      )}
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