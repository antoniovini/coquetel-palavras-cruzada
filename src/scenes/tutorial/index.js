import React from "react";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";
import Button from "../../components/button";

import DefaultLayout from "../../layouts/default";

import * as S from "./style";

import languages from "../../languages.json";
import config from "../../config.json";

import video from "../../assets/tutorial.mp4";

import back from "../../assets/icons/back.png";

import logo from "../../assets/game-logo.png";

function Tutorial() {
  return (
    <S.Container>
      <S.Box>
        <div className="header">
          <img className="logo" src={logo} />
          <h1>{languages[config.game.lang]["instructionScreen"].title}</h1>

          <Button flat>
            <Link to={"/"}>
              <img src={back} height={"20px"} />
            </Link>
          </Button>
        </div>
        <div className="options">
          <ReactPlayer
            url={video}
            width="100%"
            height="100%"
            controls={false}
            playing={true}
            className="player"
          />
        </div>
      </S.Box>
      <S.PoweredBy>Powered by Mercadata Digital</S.PoweredBy>
    </S.Container>
  );
}

export default DefaultLayout(Tutorial);
