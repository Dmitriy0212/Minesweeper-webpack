import colorNumer from "./switch-case"
import { mas } from "./index"
import { spunLevelThis } from "./index"
export default function openUpFild(event) {
	let c = 0
	let d = 0
	let fild1 = document.querySelector('.fild')
	for (let i = 0; i < fild1.children.length; i++) {
		for (let j = 0; j < fild1.children[i].children.length; j++) {
			if (event == fild1.children[i].children[j]) {
				if (event == fild1.children[i].children[fild1.children[i].children.length - 1]) {
					let a = c + j
					for (let count in mas) {
						if (mas[count] == a - 1 || mas[count] == a + fild1.children.length || mas[count] == a + (fild1.children.length - 1) || mas[count] == a - (fild1.children.length + 1) || mas[count] == a - fild1.children.length) {
							d += 1
							colorNumer(d,event)
							event.textContent = d
							event.className = 'not-button-bomb' + '-' + spunLevelThis.textContent.toLowerCase()
							event.disabled = true
						}
					}
				}
				else if (event == fild1.children[i].children[0]) {
					let a = c + j
					for (let count in mas) {
						if (mas[count] == a + 1 || mas[count] == a + (fild1.children.length + 1) || mas[count] == a + fild1.children.length || mas[count] == a - fild1.children.length || mas[count] == a - (fild1.children.length - 1)) {
							d += 1
							colorNumer(d,event)
							event.textContent = d
							event.className = 'not-button-bomb' + '-' + spunLevelThis.textContent.toLowerCase()
							event.disabled = true
						}
					}
				}
				else if (event !== fild1.children[i].children[0] || event == fild1.children[i].children[fild1.children[i].children.length - 1]) {
					let a = c + j;
					for (let count in mas) {
						if (mas[count] == a + 1 || mas[count] == a - 1 || mas[count] == a + (fild1.children.length + 1) || mas[count] == a + fild1.children.length || mas[count] == a + (fild1.children.length - 1) || mas[count] == a - (fild1.children.length + 1) || mas[count] == a - fild1.children.length || mas[count] == a - (fild1.children.length - 1)) {
							d += 1
							colorNumer(d,event)
							event.textContent = d
							event.className = 'not-button-bomb' + '-' + spunLevelThis.textContent.toLowerCase()
							event.disabled = true
						}
					}
				}
			}
		}
		c += Number(fild1.children.length)
	}
	return d
}