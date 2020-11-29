import React from "react";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";
import Button from "../../components/button";

import DefaultLayout from "../../layouts/default";

import * as S from "./style";

function Tutorial() {
  return (
    <S.Container>
      <S.Box>
        <div className="header">
          <img className="logo" src={"/assets/game-logo.png"} />
          <h1>Instruções</h1>

          <Button flat>
            <Link to={"/"}>
              <img src={"/assets/icons/back.png"} height={"20px"} />
            </Link>
          </Button>
        </div>
        <div className="options">
          <ReactPlayer 
            url='/assets/tutorial.mp4'
            width= "750px"
            height= "480px"
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