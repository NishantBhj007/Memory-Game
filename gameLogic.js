import { elements } from "./index.js";
import { endGame } from "./ui.js";
let cardOne, cardTwo;
let disableDeck = false;
let matchedCards = 0;

export function flipCard(e) {
  let clickedCard = e.target;
  if (clickedCard !== cardOne && !disableDeck) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      cardOne = clickedCard;
      return;
    }

    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector("img").src;
    let cardTwoImg = cardTwo.querySelector("img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

export function matchCards(img1, img2) {
  if (img1 === img2) {
    matchedCards++;
    if (matchedCards === 8) {
      endGame();
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    disableDeck = false;
  } else {
    shakeCards();
  }
}

export function shakeCards() {
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
}

export function shuffleCard() {
  matchedCards = 0;
  cardOne = cardTwo = "";
  disableDeck = false;
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

  elements.cards.forEach((card, index) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector("img");
    imgTag.src = `images/dog_${arr[index]}.png`;
    card.addEventListener("click", flipCard);
  });
}
