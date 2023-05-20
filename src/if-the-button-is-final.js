import { numberOfBomb } from "./index"
import { timerId } from "./index"
import { spunLevelThis } from "./index"
import { timer } from "./index";
import { numberClicks } from "./index";
import { conteinerGame } from "./index"
import clearSaveRest from "./clear-the-history";
import localStorageSave from "./local-storage-save";
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
					restart.id = 'restart'
					for (let h = 0; h < fild1.children.length; h++) {
						for (let g = 0; g < fild1.children[h].children.length; g++) {
							let e = b + g;
							fild1.children[h].children[g].className = 'not-button-bomb' + '-' + spunLevelThis.textContent.toLowerCase()
							fild1.children[h].children[g].disabled = true
							for (let count in mas) {
								if (mas[count] == e) {
									if (fild1.children[i].children[j].children.length > 0) {
										for (let n = 0; n < fild1.children[i].children[j].children.length;) {
											fild1.children[i].children[j].removeChild(fild1.children[i].children[j].children[n]);
										}
									}
									let img = document.createElement('img')
									img.src = "./art/bomb-happy.png"
									img.style = 'width: inherit;height: inherit;'
									fild1.children[h].children[g].appendChild(img)
									fild1.children[h].children[g].className = 'button-bomb-heppi' + '-' + spunLevelThis.textContent.toLowerCase()
									fild1.children[h].children[g].disabled = true
								}
							}
						}
						b += Number(fild1.children.length)
					}
					localStorageSave()
					restart.textContent = `Hooray! You found all mines in ${timer.textContent} seconds and ${numberClicks.textContent} moves!`
					conteinerGame.appendChild(restart)
					clearSaveRest()
					clearInterval(timerId);
					return
				}
			}
		}
	}
}