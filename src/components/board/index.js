import React , { useEffect} from 'react';

import * as S from './styles';

function Board({ data, onSelect, selectedWord }) {

  useEffect(() => { }, [selectedWord]);

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
                onClick={() => {
                  if(cell.tips){
                    if(selectedWord){
                      const nextTip = cell.tips.filter((tip) => tip !== selectedWord);
                    
                      if(nextTip.length > 0){
                        onSelect(nextTip[0]);
                      }
                    }else{
                      onSelect(cell.tips[0]);
                    }
                  }else{
                    onSelect(cell.word)
                  }
                }}
                selected={selectedWord && Array.isArray(cell.word) ? cell.word.find(item => item === selectedWord) : selectedWord === cell.word}
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