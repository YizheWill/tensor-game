document.addEventListener('DOMContentDidLoaded', () => {
  const cardArray = [
    { name: 'blue', img: 'images/blue.png' },
    { name: 'grapefruit', img: 'images/grapefruit.png' },
    { name: 'gray', img: 'images/gray.png' },
    { name: 'green', img: 'images/green.png' },
    { name: 'orange', img: 'images/orange.png' },
    { name: 'pink', img: 'images/pink.png' },
    { name: 'purple', img: 'images/purple.png' },
  ];
  const grid = document.querySelector('.grid');
  const cardsChosen = [];
  const cardsChosenId = [];
  const checkForMatch = () => {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards(optionOneId).setAttribute('src', 'images/black.png');
      cards(optionTwoId).setAttribute('src', 'images/black.png');
      cardsWon.push(cardsChosen);
    } else {
      card[optionOne.Id].setAttribute('src')
    }
  };
  const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'image/black.png');
      card.setAttribute('data-id', i);
      // card.addEventListener('click', flipcard);
      grid.appendChild(card);
    }
  };
  const flipCard = () => {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    StyleSheetList.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  };
});
