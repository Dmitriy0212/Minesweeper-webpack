import { numberOfRows } from "./index"
import { numberOfBomb } from "./index"
import { mas } from "./index"
import { timerId } from "./index"
export default function ifTheButtonIsFinal() {
	let b = 0;
	let d = 0;
	let fild1 = document.querySelector('.fild')
	for (let i = 0; i < fild1.children.length; i++) {
		for (let j = 0; j < fild1.children[i].children.length; j++) {
			if (fild1.children[i].children[j].className == 'button-bomb') {
				clearInterval(timerId);
				return
			}
			else if (fild1.children[i].children[j].className == 'not-button-bomb') {
				d++
				if (Number(d) == (numberOfRows * numberOfRows - Number(numberOfBomb))) {
					let restart = document.createElement('div')
					restart.className = 'restart'
					for (let h = 0; h < fild1.children.length; h++) {
						for (let g = 0; g < fild1.children[h].children.length; g++) {
							let e = b + g;
							fild1.children[h].children[g].className = 'not-button-bomb'
							fild1.children[h].children[g].disabled = true
							for (let count in mas) {
								if (mas[count] == e) {
									fild1.children[h].children[g].textContent = 'x'
									fild1.children[h].children[g].className = 'button-bomb-heppi'
									fild1.children[h].children[g].disabled = true
								}
							}
						}
						b += Number(numberOfRows)
					}
					/* conteiner.appendChild(restart)*/
					clearInterval(timerId);
					return
				}
			}
		}
	}
}