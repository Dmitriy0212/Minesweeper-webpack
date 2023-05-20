import { timerId } from "./index";
import { timer } from "./index";
import { numberClicks } from "./index";
import { mas } from "./index";
import { spunLevelThis } from "./index";
import startFromSave from "./start-game-from-save";
import clearSaveRest from "./clear-the-history";
import { conteinerGame } from "./index"
export default function toDoList() {
    if (conteinerGame.children.length > 2) {
        let nested = document.getElementById("restart");
        conteinerGame.removeChild(nested);
      }
    clearSaveRest()
    let objJson2 = JSON.stringify(localStorage);
    let objJson3 = JSON.parse(objJson2);
    let arr2 = [];
    for (let key in objJson3) {
        if (String(key).includes('Save') !== true) {
            continue
        }
        else if (String(key).includes('Save') == true) {
            let object1 = JSON.parse(objJson3[key]);
            for (let key1 in object1.obgAll.obgSave) {
                let item = object1.obgAll.obgSave[key1]
                arr2.push(item)
            }
        }
    }

    clearInterval(timerId);
    for (let value1 in arr2) {
        if (this.textContent == arr2[value1].save) {
            localStorage.clear()
            for (let key in objJson3) {
                if (String(key).includes('Save') !== true) {
                    localStorage.setItem(key, objJson3[key]);
                }
            }
            let objJson1;
            for (let key in objJson3) {
                if (String(key).includes('Save') == true) {
                    let object2 = JSON.parse(objJson3[key]);
                    object2.obgAll.obgSaveRest.splice(0, 1, arr2[value1])
                    objJson1 = JSON.stringify(object2);
                    localStorage.setItem('Save', objJson1);
                    break
                }
            }
            timer.textContent = arr2[value1].time
            numberClicks.textContent = arr2[value1].clicks
            spunLevelThis.textContent = arr2[value1].levelThis
            for (let index in arr2[value1].masBomb) {
                mas.splice(index, 1, arr2[value1].masBomb[index])
            }
            startFromSave(arr2[value1].masValue, arr2[value1].masStyle, arr2[value1].colorValue, arr2[value1].numberRous, arr2[value1].masArt)
            return
        }
    }
}