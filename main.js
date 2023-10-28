// const header = document.createElement('header');
// header.id = 'header';
// root.appendChild(header);

// // const howToPlay = document.createElement('howToPlay');
// // howToPlay.id = 'howToPlay';
// // howToPlay.classList.add = 'menu';
// // howToPlay.innerText = '?';
// // header.appendChild(howToPlay);

// const numberle = document.createElement('numberle');
// numberle.id = 'numberle';
// numberle.innerText = 'NUMBERLE';
// header.appendChild(numberle);


// const game = document.createElement('div');
// let gameTiles = '<div>0</div>';

// for (let index = 0; index < 6; index++) {
//   gameTiles += `<div>${index}</div>`;
//   console.log(gameTile[index]);
// }

// game.innerHTML = gameTiles;

// const game = document.createElement('game');
// game.id = 'game';
// game.innerText = 'game';
// root.appendChild(game);

// function getRandomNumber() {
//   let zeroArray = ['0','0','0','0','0'];
//   let randomNumber = Math.floor(Math.random() * 100000);
//   randomNumber = randomNumber.toString();
//   randomNumber = randomNumber.split('');
//   if (randomNumber.length !== 5){
//     for (let i = 1; i < randomNumber.length; i++) {
//       console.log(randomNumber.indexOf(i));
//     }

//   } else {
//     return randomNumber;
//   }
//   // console.log(secretNumber);

//   return randomNumber;
// }
function getRandomNumber() {
  let secretNumber = ['0', '0', '0', '0', '0'];
  let randomNumberArray = Math.floor(Math.random() * 100000).toString();
  randomNumberArray = randomNumberArray.split('');
  console.log(randomNumberArray);
  if (randomNumberArray.length === 5) {
    secretNumber = randomNumberArray;
  } else {
    const restOfRandomNumber = 5 - randomNumberArray.length;
    for (let i = 5; i > restOfRandomNumber; i--) {
      secretNumber[i - 1] = randomNumberArray[i - restOfRandomNumber - 1];
    }
  }

  return secretNumber;
}



// // JONA
// // Manera para generar numero aleatorio pudiendo decidir número máximo o minimo.

// function getRandomNumber({min,max}) {
//   const randomNumber = Math.floor((Math.random()* (max + 1 - min)) + min);
//   // const randomNumber = Math.floor(Math.random() * (max - min) - min)
//   return randomNumber;
// }

function getSecretNumberAsArray({maxNumberLength}) {
  const getSecretNumberAsArray = [];
  for (let i = 0; i < maxNumberLength; i++) {
    const randomNumber = getRandomNumber({min, max});
    getSecretNumberAsArray.push.randomNumber;
  }
  return getSecretNumberAsArray;
}

function getHeader() {
  const header = document.createElement('header');
  header.id = 'header';
  const h1 = document.createElement('h1');
  h1.classList.add('title');
  h1.innerText = 'NUMBERLE';
  header.appendChild(h1);
  return header;
}


function getBoard() {
  const boardContainer = document.createElement('div');
  boardContainer.id = 'boardContainer';
  const board = document.createElement('div');
  board.id = 'board';
  boardContainer.appendChild(board);

  for (let i = 0; i < 6; i++) {
    const gameRow = document.createElement('div');
    gameRow.classList.add('gameRow');
    gameRow.classList.add('row-'+i);
    board.appendChild(gameRow);

    for (let j = 0; j < 5; j++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.classList.add('tile-'+j);
      // tile.innerText = `${j}`;
      gameRow.appendChild(tile);
    }
  }

  return boardContainer;
}


function getKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.id = 'keyboard';
  const enter = document.createElement('div');
  enter.id = 'enter';
  enter.innerText = 'ENTER';
  keyboard.appendChild(enter);
  for (let i = 0; i < 10; i++) {
    const key = document.createElement('div');
    key.classList.add('numberKey');
    key.innerText = `${i}`;
    keyboard.appendChild(key);
  }
  const backspace = document.createElement('div');
  backspace.id = 'backspace';
  backspace.innerHTML =  '<svg xmlns="<http://www.w3.org/2000/svg>" height="24" viewBox="0 0 24 24" width="24">     <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>   </svg>';
  keyboard.appendChild(backspace);
  return keyboard;
}

function createPage() {
  getSecretNumberAsArray;
  console.log(getRandomNumber());
  const root = document.getElementById('root');
  const container = document.createElement('div');
  container.id = 'container';
  const header = getHeader();
  const keyboard = getKeyboard();
  const boardContainer = getBoard();
  root.appendChild(container);
  container.appendChild(header);
  container.appendChild(boardContainer);
  container.appendChild(keyboard);

}
createPage();

// function showValueOfNumberKey() {
//   const numberKeys = document.querySelectorAll('.numberKey');
//   numberKeys.forEach((key, index) => {
//     key.addEventListener('click', () => {
//       const value = key.innerText;
//       console.log(`El valor del div con clase "numberKey" en la posición ${index} es: ${value}`);
//     });
//   });
// }
// showValueOfNumberKey();

