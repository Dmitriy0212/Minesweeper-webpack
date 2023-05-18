import { mas } from "./index"
import { timerId } from "./index";
import { numberOfRows } from "./index"
import clearSaveRest from "./clear-the-history"
import { spunLevelThis } from "./index"
export default function bombIn() {
	clearSaveRest()
	clearInterval(timerId);
	let c = 0
	let fild1 = document.querySelector('.fild')
	for (let i = 0; i < fild1.children.length; i++) {
		for (let j = 0; j < fild1.children[i].children.length; j++) {
			let a = c + j
			fild1.children[i].children[j].className = 'not-button-bomb' + '-' + spunLevelThis.textContent.toLowerCase()
			fild1.children[i].children[j].disabled = true
			for (let count in mas) {
				if (mas[count] == a) {
					fild1.children[i].children[j].textContent = 'x'
					fild1.children[i].children[j].className = 'button-bomb' + '-' + spunLevelThis.textContent.toLowerCase()
					fild1.children[i].children[j].disabled = true
				}
			}
		}
		c += numberOfRows
	}
	return
}