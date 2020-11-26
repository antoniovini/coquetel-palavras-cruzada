import React from 'react';
import MenuLayout from '../../layouts/menu';

const options = [
  { text: "Novo Jogo", icon: "/assets/icons/star.png", to: "/difficulty" },
  { text: "Instruções", icon: "/assets/icons/info.png", to: "/tutorial" }
]

export default MenuLayout("Palavras Cruzadas", options);