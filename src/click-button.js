import { numberClicks } from "./index"
import { numberOfRows } from "./index"
import { numberOfBomb } from "./index"
import fildClick from "./fild-click"
import { mas } from "./index"
import ifTheButtonIsFinal from "./if-the-button-is-final"
import openLeftToNumber from "./open-left-to-number"
import openRiteToNumber from "./open-rite-to-number"
import openUpToNumber from "./open-up-to-number"
import openDounToNumber from "./open-doun-to-number"
import { timerGame } from "./index"
export default function clickButton() {
	let but = this
	let c = 0;
	let fild1 = document.querySelector('.fild')
	for (let k = 0; k < fild1.children.length; k++) {
		for (let r = 0; r < fild1.children[k].children.length; r++) {
			fild1.children[k].children[r].removeEventListener('click', timerGame);
		}
	}
	for (let i = 0; i < fild1.children.length; i++) {
		for (let j = 0; j < fild1.children[i].children.length; j++) {
			let a = c + j
			for (let count in mas) {
				if (mas[count] == a) {
					if (numberClicks.textContent == 0) {
						if (this == fild1.children[i].children[j]) {
							mas.splice(count, 1, mas[count] + 1)
							function func() {
								let d = 0;
								for (let count1 in mas) {
									if (mas[count1] == mas[count]) {
										d++
										if (d > 1) {
											mas.splice(count, 1, mas[count1] + 1)
											return func()
										}
									}
								}
								return
							}
							func();
						}
					}
					fild1.children[i].children[j].textContent = 'x'
				}
			}
		}
		c += Number(numberOfRows)
	}
	setTimeout(() => {
		numberClicks.textContent = Number(numberClicks.innerHTML) + 1;
		fildClick(but);
		openRiteToNumber(but)
		openLeftToNumber(but)
		openUpToNumber(but)
		openDounToNumber(but)
		ifTheButtonIsFinal();
	});
}