import { timer } from "./index";
import { numberClicks } from "./index";
import { arr2 } from "./index";
import { mas } from "./index";
import startFromSave from "./start-game-from-save";
export default function toDoList2() {
    for (let value1 in arr2) {
        if (this.value == arr2[value1].save) {
            timer.textContent = arr2[value1].time
            numberClicks.textContent = arr2[value1].clicks
            for (let index in mas) {
                mas.splice(index, 1, arr2[value1].masBomb[index])
            }
            startFromSave(arr2[value1].masValue, arr2[value1].masStyle, arr2[value1].colorValue)
        }
    }
}