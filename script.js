const globalContainer = document.querySelector("#container-global");

//Gerar números aleatórios
function generateRanNum() {
  const myArr = [];
  const min = 1;
  const max = 9;

  while (myArr.length !== 8) {
    let finalResult = Math.floor(Math.random() * (max - min) + min);
    if (myArr.includes(finalResult) === false) {
      myArr.push(finalResult);
    } else {
      continue;
    }
  }

  return myArr;
}

//Conferir a ordem
function checkOrder(arr) {
  const correctOrder = [1, 2, 3, 4, 5, 6, 7, 8];
  let rightORwrong = null;

  for (let i = 0; i < correctOrder.length; i++) {
    if (Number(arr[i].innerHTML) === correctOrder[i]) {
      rightORwrong = true;
    } else {
      rightORwrong = false;
      break;
    }
  }

  return rightORwrong;
}

function startGame() {
  const returnRandomNums = generateRanNum();

  const numItems = document.querySelectorAll(".container-itens");
  for (let i = 0; i < numItems.length; i++) {
    numItems[i].innerHTML = returnRandomNums[i];
  }

  const getStartText = document.querySelector("#start-text");
  getStartText.style.display = "none";
}

function checkResult() {
  const numItems = document.querySelectorAll(".container-itens");
  for (let i = 0; i < numItems.length; i++) {
    console.log(numItems[i]);
  }

  if (numItems[0].innerHTML) {
    const returnCheckOrder = checkOrder(numItems);

    if (returnCheckOrder) {
      alert("Parabéns, você conseguiu!!!");
    } else {
      alert("ordem incorreta");
    }
  } else {
    alert("você deve iniciar o jogo primeiro!");
  }
}

//show random numbers as soon you click on the button

//check the right order of the numbers

//include another button to check the order of the elements

//start a time count, the player must finish before the time out, once it's time out, the game must refresh the page

//if the player prefers conferir before starting the game, display an erro message
