export const selectedCordinates = (board, word) => {
  const cordinates = {};
  const letters = [];

  for(let y = 0; y < board.length; y++){
    for(let x = 0; x < board[0].length; x++){
      const letter = board[y][x];
      if(Array.isArray(letter.word)){
        if(letter.word.includes(word)){
          letters.push({ x, y, ...letter });
        }
      }else if(letter.word === word) {
        letters.push({ x, y, ...letter });
      }
    }
  }

  const notFilled = letters.filter((letter) => !letter.value && letter.length !== 0);

  if(notFilled.length <= 0){
    const lastCell = letters[letters.length - 1];
    return {x: lastCell.x, y: lastCell.y};
  }

  cordinates.x = notFilled[0].x;
  cordinates.y = notFilled[0].y;

  return cordinates;
}

export const fillCell = (game, value, x, y) => {
  const board = game.data;

  if(board.length <= y || board[0].length <= x){
    return
  }

  const copy = [ ...board ];
  copy[y][x].value = value;

  return {...game, data:copy};
}

export const nextCell = (game, x, y, word) => {
  const words = game.words;

  const currWord = words.filter((w) => w.word === word)[0];

  if(currWord.vertical){
    const range = currWord.y.split('-');
    if(y + 1 < range[1]){
      return {y: y + 1, x};
    }
  }

  if(currWord.horizontal){
    const range = currWord.x.split('-');
    if(x + 1 < range[1]){
      return {x: x + 1, y};
    }
  }

  return false;
}

export const backCell = (game, x, y, word) => {
  const words = game.words;

  const currWord = words.filter((w) => w.word === word)[0];

  if(currWord.vertical){
    const range = currWord.y.split('-');
    if(y - 1 >= range[0] - 1){
      return {y: y - 1, x};
    }
  }

  if(currWord.horizontal){
    const range = currWord.x.split('-');
    if(x - 1 >= range[0] - 1){
      return {x: x - 1, y};
    }
  }

  return false;
}