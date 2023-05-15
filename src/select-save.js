import { timerId } from "./index";
import { timer } from "./index";
import { numberClicks } from "./index";
import { mas } from "./index";
import { masTo } from "./local-storage-save";
import startFromSave from "./start-game-from-save";
export default function toDoList() {
    clearInterval(timerId);
    for (let value1 in masTo) {
        if (this.value == masTo[value1].save) {
            timer.textContent = masTo[value1].time
            numberClicks.textContent = masTo[value1].clicks
            for (let index in mas) {
                mas.splice(index,1,masTo[value1].masBomb[index])
            }
            startFromSave(masTo[value1].masValue, masTo[value1].masStyle, masTo[value1].colorValue)
        }
    }
}