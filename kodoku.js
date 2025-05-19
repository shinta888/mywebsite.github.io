const cards = ['🍎', '🍌', '🍓', '🍇', '🍍', '🍊'];
let cardValues = [...cards, ...cards]; // 2組作る
cardValues = cardValues.sort(() => 0.5 - Math.random());

const board = document.getElementById("game-board");
let firstCard = null;
let secondCard = null;
let lock = false;

cardValues.forEach(value => {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = "";
  card.dataset.value = value;
  card.addEventListener("click", () => {
    if (lock || card.classList.contains("flipped")) return;

    card.classList.add("flipped");
    card.textContent = value;

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      lock = true;

      if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard = null;
        secondCard = null;
        lock = false;
      } else {
        setTimeout(() => {
          firstCard.classList.remove("flipped");
          secondCard.classList.remove("flipped");
          firstCard.textContent = "";
          secondCard.textContent = "";
          firstCard = null;
          secondCard = null;
          lock = false;
        }, 1000);
      }
    }
  });

  board.appendChild(card);
});
