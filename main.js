 var cards = [
 "H1", "H2", "H3",  "H4",  "H5",  "H6", "H7",
 "H8", "H9", "H10", "H11", "H12", "H13",
 "C1", "C2", "C3",  "C4",  "C5",  "C6", "C7",
 "C8", "C9", "C10", "C11", "C12", "C13",
 "S1", "S2", "S3",  "S4",  "S5",  "S6", "S7",
 "S8", "S9", "S10", "S11", "S12", "S13",
 "D1", "D2", "D3",  "D4",  "D5",  "D6", "D7",
 "D8", "D9", "D10", "D11", "D12", "D13"
];

function shuffle(array){
      var arrayCopy = array.slice(0);
      var length = array.length;
      var shuffledArray = [];
    for (var i = 0; i < length; i++) {
      var index = Math.floor(Math.random()*arrayCopy.length);
      shuffledArray.push(arrayCopy.splice(index,1)[0]);
    } return shuffledArray;
}

var shuffledDeck = shuffle(cards);

var halve1 = cards.splice(0, 26);

var halve2 = cards;


function riffle(array1, array2){
  var length1 = array1.length;
  var length2 = array2.length;
  var riffleArray = [];

  var number = Math.floor(Math.random()*2);

  while (array1.length || array2.length) {

    if(number === 0){
    var index = Math.ceil(Math.random()*26);
    var temp = array1.splice(0, index);
    number = 1;
    for (var i = 0; i < temp.length; i++) {
      riffleArray.push(temp[i]);

    }
   } else if (number === 1){
    var index2 = Math.ceil(Math.random()*26);
    var temp2 = array2.splice(0, index2);
    number = 0;
    for (var j = 0; j < temp2.length; j++) {
      riffleArray.push(temp2[j]);
    }
   }
  } return riffleArray;
 }

var finalRiffle = riffle(halve1, halve2);


