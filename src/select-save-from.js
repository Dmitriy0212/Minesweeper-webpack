import { timer } from "./index";
import { numberClicks } from "./index";
import { mas } from "./index";
import { timerId } from "./index";
import startFromSave from "./start-game-from-save";
import { selectSave } from "./index";
import { timerGame } from "./index";
import { masTo } from "./local-storage-save";
export default function toDoList2() {
    debugger
    clearInterval(timerId);
    for (let value1 in masTo) {
        if (this.value == masTo[value1].save) {
            timer.textContent = masTo[value1].time
            numberClicks.textContent = masTo[value1].clicks
            for (let index in mas) {
                mas.splice(index, 1, masTo[value1].masBomb[index])
            }
            startFromSave(masTo[value1].masValue, masTo[value1].masStyle, masTo[value1].colorValue)
        }
    }
    selectSave.value = ''
    timerGame()
}