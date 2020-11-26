import MenuLayout from '../../layouts/menu';

const options = [
  { text: "Iniciante", icon: "/assets/icons/books.png", to: "/game?mode=easy" },
  { text: "Intermediário", icon: "/assets/icons/certificate.png", to: "/game?mode=medium" },
  { text: "Profissional", icon: "/assets/icons/student.png", to: "/game?mode=hard" }
]

export default MenuLayout("Nível de Dificuldade", options, "/");