 var cards = ['queen', 'queen', 'king', 'king'];
 var cardsInPlay = [];
 var cardOne = cards[3];
 cardsInPlay.push(cardOne);
 console.log('User flipped ' + cardOne);

 var cardTwo = cards[1];
 cardsInPlay.push(cardTwo);
 console.log('User flipped ' + cardTwo);

 if (cardsInPlay.length === 2) {
   if (cardsInPlay[0] === cardsInPlay[1]) {
     alert('You found a match!');
   } else {
     alert('Sorry, try again.');
 var checkForMatch = function () {
   if (cardsInPlay.length === 2) {
     if (cards[cardsInPlay[0]] === cards[cardsInPlay[1]]) {
       alert('You found a match!');
     } else {
       alert('Sorry, try again.');
     }
    }
 }
 };

 var flipCard = function (cardId) {
   cardsInPlay.push([cardId]);
   console.log('User flipped ' + cards[cardId]);
   checkForMatch();
 };
