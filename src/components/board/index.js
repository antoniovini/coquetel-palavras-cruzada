import React , { useEffect} from 'react';

import * as S from './styles';

function Board({ data, onSelect, selectedWord }) {

  useEffect(() => { console.log(selectedWord)}, [selectedWord]);

  return (
    <S.Container
    >
      {data.map((row, index) => (
        <S.Row
          key={index}
        >
          { row.map((cell, index) => {
            return (
              <S.Cell
                key={index}
                yCount={data.length}
                tips={cell.tips}
                onClick={() => onSelect(cell.word)}
                selected={selectedWord && selectedWord === cell.word}
              >
                { cell.tips ? cell.tips.map((tip) => (
                  <div className="tip">{tip}</div>
                )) : (
                  <input maxLength="1"/>
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