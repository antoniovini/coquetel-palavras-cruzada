import React from 'react';

import * as S from './styles';

function Timer({time="00:00:00"}) {
  return (
    <S.Container>
      <img src={"/assets/clock.png"} />
      <div>
        <h3>{time}</h3>
      </div>
    </S.Container>
  );
}

export default Timer;