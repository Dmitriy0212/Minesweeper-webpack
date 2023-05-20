import { mas } from "./index"
import { timerId } from "./index";
import clearSaveRest from "./clear-the-history"
import { spunLevelThis } from "./index"
import { conteinerGame } from "./index"
import soundLoad from "./sound-load"
export default function bombIn() {
	clearSaveRest()
	clearInterval(timerId);
	let c = 0
	let restart = document.createElement('div')
	restart.className = 'restart-fool'
	restart.id = 'restart'
	restart.textContent = 'Game over. Try again'
	conteinerGame.appendChild(restart)
	soundLoad()
	let fild1 = document.querySelector('.fild')
	for (let i = 0; i < fild1.children.length; i++) {
		for (let j = 0; j < fild1.children[i].children.length; j++) {
			let a = c + j
			fild1.children[i].children[j].className = 'not-button-bomb' + '-' + spunLevelThis.textContent.toLowerCase()
			fild1.children[i].children[j].disabled = true
			for (let count in mas) {
				if (mas[count] == a) {
					if (fild1.children[i].children[j].children.length > 0) {
						for (let n = 0; n < fild1.children[i].children[j].children.length;) {
							fild1.children[i].children[j].removeChild(fild1.children[i].children[j].children[n]);
						}
					}
					let img = document.createElement('img')
					img.src = "./art/bomb.png"
					img.style = 'width: inherit;height: inherit;'
					fild1.children[i].children[j].appendChild(img)
					fild1.children[i].children[j].className = 'button-bomb' + '-' + spunLevelThis.textContent.toLowerCase()
					fild1.children[i].children[j].disabled = true
				}
			}
		}
		c += fild1.children.length
	}
	return
}