import React from 'react';
import MenuLayout from '../../layouts/menu';

import languages from '../../languages.json';
import config from '../../config.json';

const options = [
  { text: languages[config.game.lang]['firstScreen'].firstButton, icon: "/assets/icons/star.png", to: "/themes" },
  { text: languages[config.game.lang]['firstScreen'].secondButton, icon: "/assets/icons/info.png", to: "/tutorial" }
]

export default MenuLayout(languages[config.game.lang]['firstScreen'].title, options);