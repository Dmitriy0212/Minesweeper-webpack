import openRiteToNumber from "./open-rite-to-number"
import openLeftToNumber from "./open-left-to-number"
export default function openDounToNumber(event) {
	let fild1 = document.querySelector('.fild')
	for (let i = 0; i < fild1.children.length; i++) {
		for (let j = 0; j < fild1.children[i].children.length; j++) {
			if (event == fild1.children[i].children[j]) {
				if (fild1.children[i + 1] == undefined || event.textContent !== ' ' || fild1.children[i + 1].children[j].className !== 'button') {
					return
				}
				openRiteToNumber(fild1.children[i + 1].children[j])
				openLeftToNumber(fild1.children[i + 1].children[j])
				event = fild1.children[i + 1].children[j]
				return openDounToNumber(event)
			}
		}
	}
	return
}