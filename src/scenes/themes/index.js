import React from "react";

import { Link, useHistory } from "react-router-dom";
import Button from "../../components/button";

import DefaultLayout from "../../layouts/default";

import logo from "../../assets/game-logo.png";

import back from "../../assets/icons/back.png";

import pac from "../../assets/pac.png";

import music from "../../assets/music.png";

import anos90 from "../../assets/pc.png";

import oscar from "../../assets/oscar.png";

import tv from "../../assets/tv.png";

import football from "../../assets/football.png";

import * as S from "./style";

function Themes() {
  const history = useHistory();

  return (
    <S.Container>
      <S.Box>
        <div className="header">
          <img className="logo" src={logo} />
          <h1>Temas</h1>

          <Button flat>
            <Link to={"/"}>
              <img src={back} height={"20px"} />
            </Link>
          </Button>
        </div>
        <div className="options">
          <div
            className="circletheme"
            onClick={() => history.push("/game?mode=easy&theme=80s")}
          >
            <img alt="themes" src={pac} />
            <p>Anos 80</p>
          </div>
          <div
            className="circletheme"
            onClick={() => history.push("/game?mode=easy&theme=tv")}
          >
            <img alt="themes" src={tv} />
            <p>Tv</p>
          </div>
          <div
            className="circletheme"
            onClick={() => history.push("/game?mode=easy&theme=music")}
          >
            <img alt="themes" src={music} />
            <p>Música</p>
          </div>
          <div
            className="circletheme"
            onClick={() => history.push("/game?mode=easy&theme=oscar")}
          >
            <img alt="themes" src={oscar} />
            <p>Óscar</p>
          </div>
          <div
            className="circletheme"
            onClick={() => history.push("/game?mode=easy&theme=90s")}
          >
            <img alt="themes" src={anos90} />
            <p>Anos 90</p>
          </div>
          <div
            className="circletheme"
            onClick={() => history.push("/game?mode=easy&theme=football")}
          >
            <img alt="themes" src={football} />
            <p>Futebol</p>
          </div>
        </div>
      </S.Box>
      <S.PoweredBy>Powered by Mercadata Digital</S.PoweredBy>
    </S.Container>
  );
}

export default DefaultLayout(Themes);
