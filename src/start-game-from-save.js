import { timerGame } from "./index"
import clickButton from "./click-button"
import { fild } from "./index"
export default function startFromSave(arr1, arr2, arr3,rows) {
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
        if ([count] == a) {
          let button = document.createElement('button')
          button.className = arr2[count]
          button.style = `color: ${arr3[count]}`
          if (button.className == 'not-button-bomb') {
            button.disabled = true
          }
          button.textContent = String(arr1[count])
          button.addEventListener("click", clickButton)
          rou.appendChild(button)
        }
      }
    }
    c += Number(rows)
  }
  timerGame()
}