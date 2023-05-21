import { mas } from "./index"
import { spunBombIs } from "./index"
import { spunFregIs } from "./index"
export default function flegOffBomb(event) {
	spunFregIs.textContent-=1
	let c = 0
	let fild1 = document.querySelector('.fild')
	for (let i = 0; i < fild1.children.length; i++) {
		for (let j = 0; j < fild1.children[i].children.length; j++) {
			let a = c + j
			if (event == fild1.children[i].children[j]) {
				for (let count in mas) {
					if (mas[count] == a) {
						spunBombIs.textContent = spunBombIs.textContent * 1 + 1
					}
				}
			}
		}
		c += fild1.children.length
	}
	return
}