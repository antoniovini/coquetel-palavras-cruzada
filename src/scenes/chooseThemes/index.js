import React from "react";

import { Link } from "react-router-dom";
import Button from "../../components/button";

import DefaultLayout from "../../layouts/default";

import * as S from "./style";

function Themes() {
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
          <div className="circletheme">
            <img alt="themes" src={"/assets/pac.png"} />
            <p>Anos 80</p>
          </div>
          <div className="circletheme">
            <img alt="themes" src={"/assets/tv.png"} />
            <p>Tv</p>
          </div>
          <div className="circletheme">
            <img alt="themes" src={"/assets/music.png"} />
            <p>Música</p>
          </div>
          <div className="circletheme">
            <img alt="themes" src={"/assets/oscar.png"} />
            <p>Óscar</p>
          </div>
          <div className="circletheme">
            <img alt="themes" src={"/assets/pc.png"} />
            <p>Anos 90</p>
          </div>
          <div className="circletheme">
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
