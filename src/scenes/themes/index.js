import React from "react";

import { Link, useHistory } from "react-router-dom";
import Button from "../../components/button";

import DefaultLayout from "../../layouts/default";

import * as S from "./style";

function Themes() {
  const history = useHistory();

  return (
    <S.Container>
      <S.Box>
        <div className="header">
          <img className="logo" src={"/assets/game-logo.png"} />
          <h1>Temas</h1>

          <Button flat>
            <Link to={"/"}>
              <img src={"/assets/icons/back.png"} height={"20px"} />
            </Link>
          </Button>
        </div>
        <div className="options">
          <div className="circletheme"
            onClick={() => history.push('/game?mode=easy&theme=80s')}
          >
            <img alt="themes" src={"/assets/pac.png"} />
            <p>Anos 80</p>
          </div>
          <div className="circletheme"
            onClick={() => history.push('/game?mode=easy&theme=tv')}
          >
            <img alt="themes" src={"/assets/tv.png"} />
            <p>Tv</p>
          </div>
          <div className="circletheme"
            onClick={() => history.push('/game?mode=easy&theme=music')}
          >
            <img alt="themes" src={"/assets/music.png"} />
            <p>Música</p>
          </div>
          <div className="circletheme"
            onClick={() => history.push('/game?mode=easy&theme=oscar')}
          >
            <img alt="themes" src={"/assets/oscar.png"} />
            <p>Óscar</p>
          </div>
          <div className="circletheme"
            onClick={() => history.push('/game?mode=easy&theme=90s')}
          >
            <img alt="themes" src={"/assets/pc.png"} />
            <p>Anos 90</p>
          </div>
          <div className="circletheme"
            onClick={() => history.push('/game?mode=easy&theme=football')}
          >
            <img alt="themes" src={"/assets/football.png"} />
            <p>Futebol</p>
          </div>
        </div>
      </S.Box>
      <S.PoweredBy>Powered by Mercadata Digital</S.PoweredBy>
    </S.Container>
  );
}

export default DefaultLayout(Themes);
