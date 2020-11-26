import React from "react";

import * as S from "./styles";

function Timer({time, children}) {
  return (
    <S.Container>
      <img src={"/assets/clock.png"} />
      <div className="content">
        <h3>{time}</h3>
        {children}
      </div>
    </S.Container>
  );
}

export default Timer;
