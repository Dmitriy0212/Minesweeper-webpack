import { numberClicks } from "./index"
import { timer } from "./index"
import { timerGame } from "./index"
import { fild } from "./index"
import clickButton from "./click-button"
import { spunLevelThis } from "./index"
import { conteinerGame } from "./index"
import { spunSaveList } from "./index"
import { spunLevelList } from "./index"
import closeWimd from "./close-wind";
export default function restart() {
  closeWimd(spunSaveList)
  closeWimd(spunLevelList)
  if (conteinerGame.children.length > 2) {
    let nested = document.getElementById("restart");
    conteinerGame.removeChild(nested);
  }
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
      button.oncontextmenu = "event.preventDefault()"
      button.className = 'button' + '-' + spunLevelThis.textContent.toLowerCase()
      let img = document.createElement('img')
      button.addEventListener("contextmenu", function (event) {
        if (event.currentTarget.className !== ('button-rite' + '-' + spunLevelThis.textContent.toLowerCase())) {
          event.preventDefault();
          img.src = "./art/checkbox.png"
          img.style = 'width: inherit;height: inherit;'
          this.appendChild(img)
          this.className = 'button-rite' + '-' + spunLevelThis.textContent.toLowerCase()
        }
      });
      img.addEventListener("contextmenu", function (event) {
        event.stopPropagation()
        this.parentNode.className = 'button' + '-' + spunLevelThis.textContent.toLowerCase()
        this.parentNode.removeChild(this)
        event.preventDefault();
      })
      button.className = 'button' + '-' + spunLevelThis.textContent.toLowerCase()
      button.addEventListener("click", timerGame)
      button.textContent = String(b)
      button.addEventListener("click", clickButton)
      rou.appendChild(button)
    }
  }
}