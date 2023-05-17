import { timerId } from "./index";
import { timer } from "./index";
import { numberClicks } from "./index";
import { mas } from "./index";
import startFromSave from "./start-game-from-save";
export default function toDoList() {
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
            timer.textContent = arr2[value1].time
            numberClicks.textContent = arr2[value1].clicks
            for (let index in mas) {
                mas.splice(index, 1, arr2[value1].masBomb[index])
            }
            startFromSave(arr2[value1].masValue, arr2[value1].masStyle, arr2[value1].colorValue,arr2[value1].numberRous)
        }
    }
}