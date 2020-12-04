import React from "react";

import * as S from "./styles";

import clock from "../../assets/clock.png";

function Timer({time, children}) {
  return (
    <S.Container>
      <img src={clock} />
      <div className="content">
        <h3>{time}</h3>
        {children}
      </div>
    </S.Container>
  );
}

export default Timer;
