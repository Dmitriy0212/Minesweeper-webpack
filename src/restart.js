import { numberClicks } from "./index"
import { timer } from "./index"
import { timerGame } from "./index"
import { fild } from "./index"
import { numberOfRows } from "./index"
import { mas } from "./index";
import clickButton from "./click-button"
import { spunLevelThis } from "./index"
export default function restart() {
  let namb = fild.children.length;
  if (fild.children.length > 0) {
    for (let i = 0; i < fild.children.length;) {
      fild.removeChild(fild.children[i]);
    }
  }
  numberClicks.textContent = 0
  timer.textContent = 0;
  for (let i = 0; i < Number(namb); i++) {
    let rou = document.createElement('div')
    rou.className = 'rou'
    fild.appendChild(rou)
    for (let j = 0; j < Number(namb); j++) {
      let b = ' ';
      let button = document.createElement('button')
      button.className = 'button' + '-' + spunLevelThis.textContent.toLowerCase()
      button.addEventListener("click", timerGame)
      button.textContent = String(b)
      button.addEventListener("click", clickButton)
      rou.appendChild(button)
    }
  }
}