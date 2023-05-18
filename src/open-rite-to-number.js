import openUpFild from "./open-up-fild"
import { spunLevelThis } from "./index"
export default function openRiteToNumber(event) {
	let fild1 = document.querySelector('.fild')
	for (let i = 0; i < fild1.children.length; i++) {
		for (let j = 0; j < fild1.children[i].children.length; j++) {
			if (event.className == ('button-bomb' + '-' + spunLevelThis.textContent.toLowerCase())) {
				return
			}
			else if (event == fild1.children[i].children[j]) {
				for (let h = i; h < fild1.children.length;) {
					for (let g = j; g < fild1.children[h].children.length;) {
						fild1.children[h].children[g].className = 'not-button-bomb' + '-' + spunLevelThis.textContent.toLowerCase()
						fild1.children[h].children[g].disabled = true
						if (openUpFild(fild1.children[h].children[g]) > 0) {
							g++
							return
						}
						else {
							if (fild1.children[h].children[g + 1] == undefined) {
								return
							}
							else {
								g++
							}
						}
					}
				}
			}
		}
	}
	return
}