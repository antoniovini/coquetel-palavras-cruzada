import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/button";

import * as S from "./styles";

function MenuLayout(title = "", options = [], backTo) {
  return () => {
    return (
      <S.Container>
      <S.LogoContainer>
        <S.Logo/>
      </S.LogoContainer>
        <S.Box>
          <div className="header">
            <img className="logo" src={"/assets/game-logo.png"} />
            <h1>{title}</h1>
            {backTo && (
              <Button flat>
                <Link to={backTo}>
                  <img src={"/assets/icons/back.png"} height={"20px"} />
                </Link>
              </Button>
            )}
          </div>
          <div className="options">
            {options.map((option) => (
              <div className="option">
                <Link to={option.to}>
                  <img src={option.icon} />
                  <h1>{option.text}</h1>
                </Link>
              </div>
            ))}
          </div>
        </S.Box>
        <S.PoweredBy>Powered by Mercadata Digital</S.PoweredBy>
      </S.Container>
    );
  };
}

export default MenuLayout;
