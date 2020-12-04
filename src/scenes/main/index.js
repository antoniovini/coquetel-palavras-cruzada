import React from 'react';
import MenuLayout from '../../layouts/menu';

import languages from '../../languages.json';
import config from '../../config.json';

import star from "../../assets/icons/star.png";

import info from "../../assets/icons/info.png";

const options = [
  { text: languages[config.game.lang]['firstScreen'].firstButton, icon: star, to: "/themes" },
  { text: languages[config.game.lang]['firstScreen'].secondButton, icon: info, to: "/tutorial" }
]

export default MenuLayout(languages[config.game.lang]['firstScreen'].title, options);