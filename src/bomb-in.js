import { mas } from "./index"
import { numberOfRows } from "./index"
export default function bombIn() {
	let c = 0
	let fild1 = document.querySelector('.fild')
	for (let i = 0; i < fild1.children.length; i++) {
		for (let j = 0; j < fild1.children[i].children.length; j++) {
			let a = c + j
			fild1.children[i].children[j].className = 'not-button-bomb'
			fild1.children[i].children[j].disabled = true
			for (let count in mas) {
				if (mas[count] == a) {
					fild1.children[i].children[j].textContent = 'x'
					fild1.children[i].children[j].className = 'button-bomb'
					fild1.children[i].children[j].disabled = true
				}
			}
		}
		c += numberOfRows
	}
	return
}