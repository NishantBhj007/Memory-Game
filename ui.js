import { elements } from "./index.js";
import { watch } from "./timer.js";
import { shuffleCard } from "./gameLogic.js";

export function endGame() {
  elements.time.style.display = "none";
  elements.startGame.style.display = "none";
  elements.button.style.display = "block";
  elements.won.style.display = "block";
  clearInterval(watch);

  setTimeout(shuffleCard, 2000);
}
