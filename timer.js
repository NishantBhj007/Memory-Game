import { elements, reset } from "./index.js";

export let watch;

export function timer(second) {
  watch = setInterval(() => {
    elements.time.textContent = `00:${second}`;
    second--;

    if (second <= 0) {
      clearInterval(watch);
      setTimeout(reset, 3000);
      elements.time.classList.remove("time");
      elements.time.style.display = "none";
      elements.endMessage.style.display = "block";
      elements.startGame.style.display = "none";
    }
  }, 1000);
}
