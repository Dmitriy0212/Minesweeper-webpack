import { timerGame } from "./index"
import clickButton from "./click-button"
import { fild } from "./index"
import { spunLevelThis } from "./index"
import localStorageGetSave from "./local-storage-get-save"
import { spunThemeThis } from "./index"
import soundFlag from "./flag";
export default function startFromSave(arr1, arr2, arr3, rows, arr4) {

  let c = 0
  for (let h = 0; h < fild.children.length;) {
    fild.removeChild(fild.children[h]);
  }

  for (let i = 0; i < Number(rows); i++) {
    let rou = document.createElement('div')
    rou.className = 'rou'
    fild.appendChild(rou)
    for (let j = 0; j < Number(rows); j++) {
      let a = c + j
      for (let count in arr2) {
        if (Number(count) == a) {
          let button = document.createElement('button')
          if (arr4[count] == '') {
            button.textContent = String(arr1[count])
          }
          else if (arr4[count] !== '') {
            let obj1 = JSON.stringify(arr4[count]);
            let obj2 = JSON.parse(obj1);
            button.innerHTML = obj2
          }
          button.className = arr2[count]
          button.oncontextmenu = "event.preventDefault()"
          let img = document.createElement('img')
          button.addEventListener("contextmenu", function (event) {
            soundFlag()
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
            soundFlag()
            event.stopPropagation()
            this.parentNode.className = 'button' + '-' + spunLevelThis.textContent.toLowerCase()
            this.parentNode.removeChild(this)
            localStorageGetSave()
            event.preventDefault();
          })
          button.style = `color: ${arr3[count]}`
          if (button.className == ('not-button-bomb' + '-' + spunLevelThis.textContent.toLowerCase())) {
            button.disabled = true
          }
          button.addEventListener("click", timerGame)
          button.addEventListener("click", clickButton)
          rou.appendChild(button)
          break
        }
      }
    }
    c += Number(rows)
  }
}