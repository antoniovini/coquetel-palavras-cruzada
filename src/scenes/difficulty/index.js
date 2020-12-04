import MenuLayout from "../../layouts/menu";

import languages from "../../languages.json";
import config from "../../config.json";

import books from "../../assets/icons/books.png";

import certificate from "../../assets/icons/certificate.png";

import student from "../../assets/icons/student.png";

const options = [
  {
    text: languages[config.game.lang]["difficultyScreen"].firstButton,
    icon: books,
    to: "/game?mode=easy",
  },
  {
    text: languages[config.game.lang]["difficultyScreen"].secondButton,
    icon: certificate,
    to: "/game?mode=medium",
  },
  {
    text: languages[config.game.lang]["difficultyScreen"].thirdButton,
    icon: student,
    to: "/game?mode=hard",
  },
];

export default MenuLayout(
  languages[config.game.lang]["difficultyScreen"].title,
  options,
  "/"
);
