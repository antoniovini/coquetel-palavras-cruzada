import React from 'react';
import GlobalStyle from "../styles/global";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainMenu from '../scenes/main';
import DifficultyMenu from '../scenes/difficulty';
import Game from '../scenes/game';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/difficulty">
            <DifficultyMenu />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <MainMenu />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
