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

//iniciar o jogo
function startGame() {
  const returnRandomNums = generateRanNum();

  const numItems = document.querySelectorAll(".container-itens");
  for (let i = 0; i < numItems.length; i++) {
    numItems[i].innerHTML = returnRandomNums[i];
  }

  //fazer com que os elementos fiquem com display none
  const getStartText = document.querySelector("#start-text");
  getStartText.style.display = "none";

  const startGameBtn = document.querySelector("#start-game-btn");
  startGameBtn.style.display = "none";

  //criar botão para reiniciar o jogo causo deseje
  const resetBtn = document.createElement("button");
  resetBtn.setAttribute("class", "btn-style");
  resetBtn.setAttribute("onclick", "window.location.reload()");
  resetBtn.innerHTML = `reiniciar`;

  globalContainer.append(resetBtn);

  //tempo
  const timeLimit = setTimeout(timer, 300000);
  alert("você vai ter 5min para resolver o quebra-cabeça");

  function timer() {
    alert("tempo acabou!");
    window.location.reload();
  }
}

//conferir os valores
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

//start a time count, the player must finish before the time out, once it's time out, the game must be restarted

//if the player prefers conferir before starting the game, display an erro message
const dragElements = document.querySelectorAll(".container-itens");
for (let i = 0; i < dragElements.length; i++) {
  dragElements[i].addEventListener("dragstart", () => {
    console.log("AAA");
  });
}

for (let i = 0; i < dragElements.length; i++) {
  dragElements[i].addEventListener("dragend", () => {
    console.log("BBB");
  });
}

const containerItems = document.querySelector("#container-item");
containerItems.addEventListener("dragover", (e) => {
  e.preventDefault();
  const dragElements = document.querySelector(".container-itens");
  containerItems.appendChild(dragElements);
});
