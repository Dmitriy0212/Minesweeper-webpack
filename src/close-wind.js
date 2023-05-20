export default function closeWimd(spun) {
  debugger
  if (spun.children.length > 0) {
    for (let i = 0; i < spun.children.length;) {
      spun.removeChild(spun.children[i]);
    }
    spun.classList.toggle('active');
  }
}