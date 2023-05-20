import { numberClicks } from "./index"
import { timer } from "./index"
import { timerGame } from "./index"
import { fild } from "./index"
import clickButton from "./click-button"
import { spunLevelThis } from "./index"
import localStorageGetSave from "./local-storage-get-save"
export default function start(numberOfRows, numberOfBomb) {
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
      button.oncontextmenu = "event.preventDefault()"
      let img = document.createElement('img')
      button.addEventListener("contextmenu", function (event) {
        if (event.currentTarget.className !== ('button-rite' + '-' + spunLevelThis.textContent.toLowerCase())) {
          event.preventDefault();
          img.src = "./art/checkbox.png"
          img.style = 'width: inherit;height: inherit;'
          this.appendChild(img)
          this.className = 'button-rite' + '-' + spunLevelThis.textContent.toLowerCase()
          localStorageGetSave()
        }
      });
      img.addEventListener("contextmenu", function (event) {
        event.stopPropagation()
        this.parentNode.className = 'button' + '-' + spunLevelThis.textContent.toLowerCase()
        this.parentNode.removeChild(this)
        localStorageGetSave()
        event.preventDefault();
      })
      button.className = 'button' + '-' + spunLevelThis.textContent.toLowerCase()
      button.addEventListener("click", timerGame)
      button.textContent = String(b)
      button.addEventListener("click", clickButton)
      rou.appendChild(button)
    }
  }
  return mas
}