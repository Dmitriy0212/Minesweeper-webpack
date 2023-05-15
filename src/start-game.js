import { numberClicks } from "./index"
import { timer } from "./index"
import { timerGame } from "./index"
export default function start(fild, clickButton, numberOfRows, numberOfBomb) {
  const mas = [...Array(numberOfRows * numberOfRows).keys()]
    .sort(() => Math.random() - 0.5)
    .slice(0, Number(numberOfBomb))
  if (fild.children.length > 0) {
    for (let i = 0; i < fild.children.length;) {
      fild.removeChild(fild.children[i]);
    }
  }
  numberClicks.textContent = 0
  timer.textContent = 0;
  for (let i = 0; i < Number(numberOfRows); i++) {
    let rou = document.createElement('div')
    rou.className = 'rou'
    fild.appendChild(rou)
    for (let j = 0; j < Number(numberOfRows); j++) {
      let b = ' ';
      let button = document.createElement('button')
      button.className = 'button'
      button.addEventListener("click", timerGame)
      button.textContent = String(b)
      button.addEventListener("click", clickButton)
      rou.appendChild(button)
    }
  }
  return mas
}