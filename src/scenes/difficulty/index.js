import MenuLayout from '../../layouts/menu';

import languages from '../../languages.json';
import config from '../../config.json';

const options = [
  { text: languages[config.game.lang]['difficultyScreen'].firstButton, icon: "/assets/icons/books.png", to: "/game?mode=easy" },
  { text: languages[config.game.lang]['difficultyScreen'].secondButton, icon: "/assets/icons/certificate.png", to: "/game?mode=medium" },
  { text: languages[config.game.lang]['difficultyScreen'].thirdButton, icon: "/assets/icons/student.png", to: "/game?mode=hard" }
]

export default MenuLayout(languages[config.game.lang]['difficultyScreen'].title, options, "/");