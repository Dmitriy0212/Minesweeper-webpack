import { numberClicks } from "./index"
import { numberOfRows } from "./index"
import { numberOfBomb } from "./index"
import fildClick from "./fild-click"
import { mas } from "./index"
import ifTheButtonIsFinal from "./if-the-buttonIs-final"
import openLeftToNumber from "./open-left-to-number"
import openRiteToNumber from "./open-rite-to-number"
import openUpToNumber from "./open-up-to-number"
import openDounToNumber from "./open-doun-to-number"
export default function clickButton() {    
	let but = this
	let c = 0;
	let d = 0;
	let fild1 = document.querySelector('.fild')
	for (let i = 0; i < fild1.children.length; i++) {
		for (let j = 0; j < fild1.children[i].children.length; j++) {
			let a = c + j
			for (let count in mas) {
				if (mas[count] == a) {
					if (numberClicks.textContent == 0) {
						if (this == fild1.children[i].children[j]) {
							console.log(mas)
							mas.splice(count, 1, mas[count] + 1)
							function func() {
								for (let count1 in mas) {
									if (mas[count1] == mas[count]) {
										d++
										if (d > 1) {
											mas.splice(count, 1, mas[count1] + 1)
											return func()
										}
									}
								}
							}
							func();
						}
					}
					/*fild1.children[i].children[j].textContent = 'x'*/
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