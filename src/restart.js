import { numberClicks } from "./index"
import { timer } from "./index"
import { timerGame } from "./index"
import { fild } from "./index"
import { numberOfRows } from "./index"
import { mas } from "./index";
import clickButton from "./click-button"
export default function restart() {
  if (fild.children.length > 0) {
    for (let i = 0; i < fild.children.length;) {
      fild.removeChild(fild.children[i]);
    }
  }
  console.log(mas)
  numberClicks.textContent = 0
  timer.textContent = 0;
  debugger
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
}