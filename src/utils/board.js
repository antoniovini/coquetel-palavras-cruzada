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

  for(let i = 0; i < notFilled.length; i++){
    if(!notFilled[i].correct){
      cordinates.x = notFilled[i].x;
      cordinates.y = notFilled[i].y;
      return cordinates;
    }
  }
}

export const fillCell = (game, value, x, y, z) => {
  const board = game.data;

  if(board.length <= y || board[0].length <= x){
    return
  }

  const copy = [ ...board ];
  if(Number.isInteger(z)){
    if(Array.isArray(copy[y][x].value)){
      copy[y][x].value[z] = value;
    }else{
      copy[y][x].value = ['', ''];
      copy[y][x].value[z] = value;
    }
  }else{
    copy[y][x].value = value;
  }

  return {...game, data:copy};
}

export const nextCell = (game, x, y, z, word) => {
  const words = game.words;
  const board = game.data;

  const currWord = words.filter((w) => w.word === word)[0];

  if(board[y][x].double){
    const { correct } = board[y][x];

    if(!correct){
      if(Number.isInteger(z)){
        if(z < 1){
          return {x, y, z: z+1};
        }
      }else{
        return {x, y, z: 0};
      }
    }
  }

  if(currWord.vertical){
    const range = currWord.y.split('-').map(pos => pos - 1);
    if(y < range[1]){
      for(let i = y+1; i <= range[1]; i++){
        const { correct, double } = board[i][x];

        if(double && !correct){
          return {x, y: i, z: 0};
        }

        if(!correct){
          return {y: i, x};
        }
      }
    }
  }

  if(currWord.horizontal){
    const range = currWord.x.split('-').map(pos => pos - 1);
    if(x < range[1]){
      for(let i = x + 1; i <= range[1]; i++){
        const { correct, double } = board[y][i];

        if(double && !correct){
          return {x: i, y, z: 0};
        }

        if(!correct){
          return {x: i, y};
        }
      }
    }
  }

  return false;
}

export const backCell = (game, x, y, z, word) => {
  const words = game.words;
  const board = game.data;

  const currWord = words.filter((w) => w.word === word)[0];

  if(board[y][x].double){
    const { correct } = board[y][x];

    if(!correct){
      if(Number.isInteger(z)){
        if(z > 0){
          return {x, y, z: z-1};
        }
      }else{
        return {x, y, z: 1};
      }
    }
  }

  // if(board[y][x].double){
  //   const { correct } = board[y][x];
  //   if(Array.isArray(correct)){
  //     for(let polygon = 1; polygon > 0; polygon--) {
  //       if(!correct[polygon]){
  //         return {x, y, z: polygon};
  //       }
  //     }
  //   }else{
  //     if(Number.isInteger(z)){
  //       if(z > 0){
  //         return {x, y, z: z-1};
  //       }
  //     }else{
  //       return {x, y, z: 1};
  //     }
  //   }
  // }

  if(currWord.vertical){
    const range = currWord.y.split('-').map(pos => pos - 1);
    if(y - 1 >= range[0]){
      for(let i = y - 1; i >= range[0]; i--){
        const { correct, double } = board[i][x];

        if(double && !correct){
          return {x, y: i, z: 1};
        }

        if(!board[i][x].correct){
          return {y: i, x};
        }
      }
    }
  }

  if(currWord.horizontal){
    const range = currWord.x.split('-').map(pos => pos - 1);
    if(x - 1 >= range[0]){
      for(let i = x - 1; i >= range[0]; i--){
        const { correct, double } = board[y][i];

        if(double && !correct){
          return {x: i, y, z: 1};
        }

        if(!board[y][i].correct){
          return {x: i, y};
        }
      }
    }
  }

  return false;
}

export const getWordFromBoard = (board, word) => {
  const letters = [];

  for(let y = 0; y < board.length; y++){
    for(let x = 0; x < board[0].length; x++){
      const letter = board[y][x];
      if(Array.isArray(letter.word)){
        if(letter.word.includes(word)){
          if(letter.double){
            if(Array.isArray(letter.value)){
              letters.push(letter.value[0] || '');
              letters.push(letter.value[1] || '');
            }
          }else{
            letters.push(letter.value || '');
          }
        }
      }else if(letter.word === word) {
        if(letter.double){
          if(Array.isArray(letter.value)){
            letters.push(letter.value[0] || '');
            letters.push(letter.value[1] || '');
          }
        }else{
          letters.push(letter.value || '');
        }
      }
    }
  }
  
  return letters.join('');
}

export const getWord = (game, word) => {
  const words = game.words;
  return words.filter((w) => w.word === word)[0];
}

export const fillWord = (game, word) => {
  const wordInfo = getWord(game, word);
  const board = game.data;
  const splitedValue = wordInfo.text.split('');

  const cordinates = {};
  if(wordInfo.y.includes('-')){
    cordinates.y = wordInfo.y.split('-').map(pos => pos - 1);
    cordinates.x = wordInfo.x - 1;
  }else if(wordInfo.x.includes('-')){
    cordinates.y = wordInfo.y - 1;
    cordinates.x = wordInfo.x.split('-').map(pos => pos - 1);
  }else{
    cordinates.y = wordInfo.y - 1;
    cordinates.x = wordInfo.x - 1;
  }

  if(Array.isArray(cordinates.y)){
    let counter = 0;
    for(let y = cordinates.y[0]; y <= cordinates.y[1]; y++){
      if(board[y][cordinates.x].double){
        board[y][cordinates.x].correct = [true, true];
        board[y][cordinates.x].value = [splitedValue[counter], splitedValue[counter + 1]];
        counter += 2;
      }else{
        board[y][cordinates.x].value = splitedValue[counter];
        board[y][cordinates.x].correct = true;
        counter ++;
      }
    }
  }else if(Array.isArray(cordinates.x)){
    let counter = 0;
    for(let x = cordinates.x[0]; x <= cordinates.x[1]; x++){
      if(board[cordinates.y][x].double){
        board[cordinates.y][x].correct = [true, true];
        board[cordinates.y][x].value = [splitedValue[counter], splitedValue[counter + 1]];
        counter += 2;
      }else{
        board[cordinates.y][x].correct = true;
        board[cordinates.y][x].value = splitedValue[counter];
        counter ++;
      }
      
    }
  }else{
    if(board[cordinates.y][cordinates.x].double){
      board[cordinates.y][cordinates.x].correct = [true, true];
      board[cordinates.y][cordinates.x].value = [splitedValue[0], splitedValue[1]];
    }else{
      board[cordinates.y][cordinates.x].value = splitedValue[0];
      board[cordinates.y][cordinates.x].correct = true;
    }
  }

  return {...game, data: board};
}

export const checkWord = (game, word, value) => {
  const wordInfo = getWord(game, word);
  const board = game.data;

  if(value === wordInfo.text){
    const cordinates = {};
    if(wordInfo.y.includes('-')){
      cordinates.y = wordInfo.y.split('-').map(pos => pos - 1);
      cordinates.x = wordInfo.x - 1;
    }else if(wordInfo.x.includes('-')){
      cordinates.y = wordInfo.y - 1;
      cordinates.x = wordInfo.x.split('-').map(pos => pos - 1);
    }else{
      cordinates.y = wordInfo.y - 1;
      cordinates.x = wordInfo.x - 1;
    }

    if(Array.isArray(cordinates.y)){
      for(let y = cordinates.y[0]; y <= cordinates.y[1]; y++){
        if(!board[y][cordinates.x].correct){
          board[y][cordinates.x].correct = true;
        }
      }
    }else if(Array.isArray(cordinates.x)){
      for(let x = cordinates.x[0]; x <= cordinates.x[1]; x++){
        if(!board[cordinates.y][x].correct){
          board[cordinates.y][x].correct = true;
        }
      }
    }else{
      if(!board[cordinates.y][cordinates.x].correct){
        board[cordinates.y][cordinates.x].correct = true;
      }
    }
  }else{
    const cordinates = {};
    if(wordInfo.y.includes('-')){
      cordinates.y = wordInfo.y.split('-').map(pos => pos - 1);
      cordinates.x = wordInfo.x - 1;
    }else if(wordInfo.x.includes('-')){
      cordinates.y = wordInfo.y - 1;
      cordinates.x = wordInfo.x.split('-').map(pos => pos - 1);
    }else{
      cordinates.y = wordInfo.y - 1;
      cordinates.x = wordInfo.x - 1;
    }

    if(Array.isArray(cordinates.y)){
      for(let y = cordinates.y[0]; y <= cordinates.y[1]; y++){
        if(!board[y][cordinates.x].correct){
          board[y][cordinates.x].failed = true;
        }
      }
    }else if(Array.isArray(cordinates.x)){
      for(let x = cordinates.x[0]; x <= cordinates.x[1]; x++){
        if(!board[cordinates.y][x].correct){
          board[cordinates.y][x].failed = true;
        }
      }
    }else{
      if(!board[cordinates.y][cordinates.x].correct){
        board[cordinates.y][cordinates.x].failed = true;
      }
    }
  }

  return {...game, data: board};
}

export const getNotCorrect = (game, word) => {
  const board = game.data;
  const cordinates = [];

  let counter = 0;
  for(let y = 0; y < board.length; y++){
    for(let x = 0; x < board[0].length; x++){
      const letter = board[y][x];
      if(Array.isArray(letter.word)){
        if(letter.word.includes(word)){
          if(!letter.correct){
            cordinates.push({ x, y, id: counter });
          }
          counter++;
        }
      }else if(letter.word === word) {
        if(!letter.correct){
          cordinates.push({ x, y, id: counter });
        }
        counter++;
      }
    }
  }

  return cordinates;
}

export const fillLetter = (game, word) => {
  const board = game.data;
  const wordInfo = getWord(game, word);

  const notCorrect = getNotCorrect(game, word);
  const random = notCorrect[Math.floor(Math.random() * notCorrect.length)];

  if(!random){
    return {...game};
  }

  board[random.y][random.x].correct = true;

  if(board[random.y][random.x].double){
    board[random.y][random.x].value = [wordInfo.text[random.id], wordInfo.text[random.id+1]];
  }else{
    const doubles = wordInfo.doubles;
    let counter = 0;

    if(doubles){
      if(wordInfo.horizontal){
        doubles.forEach(double => {
          if(double - 1 < random.x){
            counter++;
          }
        })
      }
      if(wordInfo.vertical){
        doubles.forEach(double => {
          if(double - 1 < random.y){
            counter++;
          }
        })
      }
    }

    board[random.y][random.x].value = wordInfo.text[random.id + (counter)];
  }
  

  return {...game, data: board};
}