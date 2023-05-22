import { numberClicks } from "./index"
import { timer } from "./index"
import { timerGame } from "./index"
import { fild } from "./index"
import clickButton from "./click-button"
import { spunLevelThis } from "./index"
import localStorageGetSave from "./local-storage-get-save"
import soundFlag from "./flag";
import flegInBomb from "./fleg-in-bomb";
import flegOffBomb from "./fleg-off-bomb";
import { soundOn } from "./index"
export default function start(numberOfRows, numberOfBomb) {
  let mas = [...Array(numberOfRows * numberOfRows).keys()]
    .sort(() => Math.random() - 0.5)
    .slice(0, Number(numberOfBomb))

  mas.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
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
      button.addEventListener("contextmenu", timerGame)
      button.addEventListener("contextmenu", function (event) {
        let fild1 = document.querySelector('.fild')
        for (let k = 0; k < fild1.children.length; k++) {
          for (let r = 0; r < fild1.children[k].children.length; r++) {
            fild1.children[k].children[r].removeEventListener('contextmenu', timerGame);
            fild1.children[k].children[r].removeEventListener('click', timerGame);
          }
        }
        flegInBomb(this)
        if (soundOn == 1) {
          soundFlag()
        }
        if (event.currentTarget.className !== ('button-rite' + '-' + spunLevelThis.textContent.toLowerCase())) {
          event.preventDefault();
          img.src = "./art/checkbox.png"
          img.style = 'width: inherit;height: inherit;'
          this.appendChild(img)
          this.disabled = true
          this.className = 'button-rite' + '-' + spunLevelThis.textContent.toLowerCase()
        }
        localStorageGetSave()
      });
      img.addEventListener("contextmenu", function (event) {
        flegOffBomb(this.parentNode)
        if (soundOn == 1) {
          soundFlag()
        }
        event.stopPropagation()
        this.parentNode.className = 'button' + '-' + spunLevelThis.textContent.toLowerCase()
        this.parentNode.disabled = false
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