import React, { useEffect, useState } from "react";
import {
  selectedCordinates,
  fillCell,
  nextCell,
  backCell,
} from "../../utils/board";

import * as S from "./styles";

function Board({ game, onSelect, onUpdate, selectedWord }) {
  const [focus, setFocus] = useState({});

  const updateValue = (evt, x, y, z) => {
<<<<<<< HEAD
    const getKeyCode = function(str){
      return str.charCodeAt(str.length);
    }
=======
>>>>>>> 6175e9e52df48d4e099a40f73a8378e19a7489d0

    if(evt.nativeEvent instanceof KeyboardEvent){
      if (evt.nativeEvent.key === "Backspace") {
        const back = backCell(game, x, y, z, selectedWord);
        onUpdate(fillCell(game, "", x, y, z));
        setTimeout(() => {
          if (back) {
            setFocus(back);
          }
        }, 200)
      }
    }else{
      if(evt.nativeEvent.inputType === "deleteContentBackward"){
        const back = backCell(game, x, y, z, selectedWord);
        onUpdate(fillCell(game, "", x, y, z));
        if (back) {
          setFocus(back);
        }

        return;
      }

      if(!evt.nativeEvent.data){
        return;
      }

      if (evt.nativeEvent.data.length <= 1) {
        onUpdate(fillCell(game, evt.nativeEvent.data, x, y, z));
        const next = nextCell(game, x, y, z, selectedWord);
        setTimeout(() => {
          if (next) {
            setFocus(next);
          }
        }, 200);
      }
    }
  };

  const select = (word) => {
    onSelect(word);
    setFocus(selectedCordinates(game.data, word));
  };

  useEffect(() => {
    setFocus(selectedCordinates(game.data, selectedWord));
  }, [selectedWord]);

  return (
    <S.Container>
      {game.data.map((row, rowIndex) => (
        <S.Row key={rowIndex}>
          {row.map((cell, columnIndex) => {
            return (
              <S.Cell
                key={columnIndex}
                yCount={game.data.length}
                tips={cell.tips}
                onClick={() => {
                  if (cell.tips) {
                    if (cell.tips.length > 1) {
                      if (selectedWord) {
                        const nextTip = cell.tips.filter(
                          (tip) => tip !== selectedWord
                        );
                        if (nextTip.length > 0) {
                          select(nextTip[0]);
                        }
                      } else {
                        select(cell.tips[0]);
                      }
                    } else {
                      if (cell.tips[0] !== selectedWord) {
                        select(cell.tips[0]);
                      }
                    }
                  } else {
                    if (Array.isArray(cell.word)) {
                      const currentExists = cell.word.find(
                        (item) => item === selectedWord
                      );
                      if (!currentExists) {
                        select(cell.word[0]);
                      }
                    } else {
                      select(cell.word);
                    }
                  }
                }}
                selected={
                  selectedWord && Array.isArray(cell.word)
                    ? cell.word.find((item) => item === selectedWord)
                    : selectedWord === cell.word
                }
                correct={cell.correct}
                failed={cell.failed}
              >
<<<<<<< HEAD
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
                          // onKeyDown={(evt) => {
                          //   if(!cell.correct){
                          //     updateValue(evt, columnIndex, rowIndex)
                          //   }
                          // }}
                          // onChange={(evt) => fillValue(evt, columnIndex, rowIndex)}
                          value={game.data[rowIndex][columnIndex].value || ''}
                          ref={ref => {
                            if(!focus){
                              return
=======
                {cell.tips ? (
                  cell.tips.map((tip) => <div className="tip">{tip}</div>)
                ) : (
                  <>
                    {cell.arrow && (
                      <S.Arrow
                        x={cell.arrow.x}
                        y={cell.arrow.y}
                        size={cell.arrow.size}
                        src={`/assets/arrows/${cell.arrow.icon}.png`}
                      />
                    )}
                    {cell.double ? (
                      <S.Double className="double">
                        <svg
                          className="line-blue"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <line x1="0" y1="100%" x2="100%" y2="0" />
                        </svg>
                        <svg
                          className="line-yellow"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <line x1="0" y1="100%" x2="100%" y2="0" />
                        </svg>
                        <div className="top">
                          <input
                            id={`input_${columnIndex}_${rowIndex}_1`}
                            maxLength="1"
                            value={
                              game.data[rowIndex][columnIndex].value
                                ? game.data[rowIndex][columnIndex].value[0] ||
                                  ""
                                : ""
>>>>>>> 6175e9e52df48d4e099a40f73a8378e19a7489d0
                            }
                            onKeyDown={(evt) => {
                              if (!cell.correct) {
                                updateValue(evt, columnIndex, rowIndex, 0);
                              }
                            }}
                            onInput={(evt) => {
                              if (!cell.correct) {
                                updateValue(evt, columnIndex, rowIndex, 0);
                              }
                            }}
                            ref={(ref) => {
                              if (!focus) {
                                return;
                              }

                              if (
                                focus.x === columnIndex &&
                                focus.y === rowIndex &&
                                focus.z === 0 &&
                                ref
                              ) {
                                ref.focus();
                              }
                            }}
                          />
                        </div>
                        <div className="bottom">
                          <input
                            id={`input_${columnIndex}_${rowIndex}_2`}
                            maxLength="1"
                            onKeyDown={(evt) => {
                              if (!cell.correct) {
                                updateValue(evt, columnIndex, rowIndex, 1);
                              }
                            }}
                            onInput={(evt) => {
                              if (!cell.correct) {
                                updateValue(evt, columnIndex, rowIndex, 1);
                              }
                            }}
                            value={
                              game.data[rowIndex][columnIndex].value
                                ? game.data[rowIndex][columnIndex].value[1] ||
                                  ""
                                : ""
                            }
                            ref={(ref) => {
                              if (!focus) {
                                return;
                              }

                              if (
                                focus.x === columnIndex &&
                                focus.y === rowIndex &&
                                focus.z === 1 &&
                                ref
                              ) {
                                ref.focus();
                              }
                            }}
                          />
                        </div>
                      </S.Double>
                    ) : (
                      <input
                        id={`input_${columnIndex}_${rowIndex}`}
                        className="single-input"
                        maxLength="1"
                        onKeyDown={(evt) => {
                          if (!cell.correct) {
                            updateValue(evt, columnIndex, rowIndex);
                          }
                        }}
                        onInput={(evt) => {
                          if (!cell.correct) {
                            updateValue(evt, columnIndex, rowIndex);
                          }
                        }}
                        value={game.data[rowIndex][columnIndex].value || ""}
                        ref={(ref) => {
                          if (!focus) {
                            return;
                          }

                          if (
                            focus.x === columnIndex &&
                            focus.y === rowIndex &&
                            ref
                          ) {
                            ref.focus();
                          }
                        }}
                      />
                    )}
                  </>
                )}
              </S.Cell>
            );
          })}
        </S.Row>
      ))}
    </S.Container>
  );
}

export default Board;
