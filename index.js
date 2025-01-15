import { timer } from "./timer.js";
import { shuffleCard, flipCard } from "./gameLogic.js";
export const elements = {
  cards: document.querySelectorAll(".card"),
  time: document.querySelector(".time"),
  button: document.querySelector(".bt"),
  level: document.querySelectorAll(".type"),
  choose: document.querySelector(".choose"),
  startGame: document.querySelector(".cards"),
  endMessage: document.querySelector(".message"),
  won: document.querySelector(".won"),
};
const { level, cards, button, time, choose, startGame } = elements;
//function to handle level selection

function selectLevel(event) {
  const clickedLevel = event.target.value;
  time.style.display = "block";
  choose.style.display = "none";

  level.forEach((e) => (e.style.display = "none"));

  startGame.style.display = "flex";

  let timerSeconds;
  if (clickedLevel === "1") {
    timerSeconds = 100;
  } else if (clickedLevel === "2") {
    timerSeconds = 80;
  } else if (clickedLevel === "3") {
    timerSeconds = 60;
  }

  if (timerSeconds) {
    timer(timerSeconds);
  }
}

function setupEventListeners() {
  cards.forEach((card) => card.addEventListener("click", flipCard));
  level.forEach((e) => e.addEventListener("click", selectLevel));
  button.addEventListener("click", reset);
}
//game reset
export function reset() {
  window.location.reload();
}
//initialize the game
shuffleCard();
setupEventListeners();
