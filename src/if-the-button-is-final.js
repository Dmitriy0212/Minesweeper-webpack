import { numberOfBomb } from "./index"
import { timerId } from "./index"
import { spunLevelThis } from "./index"
import clearSaveRest from "./clear-the-history";
export default function ifTheButtonIsFinal(mas) {
	let b = 0;
	let d = 0;
	let fild1 = document.querySelector('.fild')
	for (let i = 0; i < fild1.children.length; i++) {
		for (let j = 0; j < fild1.children[i].children.length; j++) {
			if (fild1.children[i].children[j].className == ('button-bomb' + '-' + spunLevelThis.textContent.toLowerCase())) {
				clearInterval(timerId);
				clearSaveRest()
				return
			}
			else if (fild1.children[i].children[j].className == ('not-button-bomb' + '-' + spunLevelThis.textContent.toLowerCase())) {
				d++
				if (Number(d) == (fild1.children.length * fild1.children.length - Number(numberOfBomb))) {
					let restart = document.createElement('div')
					restart.className = 'restart'
					for (let h = 0; h < fild1.children.length; h++) {
						for (let g = 0; g < fild1.children[h].children.length; g++) {
							let e = b + g;
							fild1.children[h].children[g].className = 'not-button-bomb' + '-' + spunLevelThis.textContent.toLowerCase()
							fild1.children[h].children[g].disabled = true
							for (let count in mas) {
								if (mas[count] == e) {
									fild1.children[h].children[g].textContent = 'x'
									fild1.children[h].children[g].className = 'button-bomb-heppi' + '-' + spunLevelThis.textContent.toLowerCase()
									fild1.children[h].children[g].disabled = true
								}
							}
						}
						b += Number(fild1.children.length)
					}
					/* conteiner.appendChild(restart)*/
					clearSaveRest()
					clearInterval(timerId);
					return
				}
			}
		}
	}
}