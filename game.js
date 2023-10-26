document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "Gru",
      img: "images/Gru.jpg",
    },
    {
      name: "Lucy",
      img: "images/Lucy.jpg",
    },
    {
      name: "Margo",
      img: "images/Margo.jpg",
    },
    {
      name: "Edith",
      img: "images/Edith.jpg",
    },
    {
      name: "Agnes",
      img: "images/Agnes.jpg",
    },
    {
      name: "Kevin",
      img: "images/Kevin.jpg",
    },
    {
      name: "Bob",
      img: "images/Bob.jpg",
    },
    {
      name: "Stuart",
      img: "images/Stuart.jpg",
    },
    {
      name: "Dr.Nefario",
      img: "images/Dr.Nefario.jpg",
    },
    {
      name: "Gru",
      img: "images/Gru.jpg",
    },
    {
      name: "Lucy",
      img: "images/Lucy.jpg",
    },
    {
      name: "Margo",
      img: "images/Margo.jpg",
    },
    {
      name: "Edith",
      img: "images/Edith.jpg",
    },
    {
      name: "Agnes",
      img: "images/Agnes.jpg",
    },
    {
      name: "Kevin",
      img: "images/Kevin.jpg",
    },
    {
      name: "Bob",
      img: "images/Bob.jpg",
    },
    {
      name: "Stuart",
      img: "images/Stuart.jpg",
    },
    {
      name: "Dr.Nefario",
      img: "images/Dr.Nefario.jpg",
    },
  ];
  
  cardArray.sort(() => 0.5 - Math.random());                    //sort everything randomly in the array 

  const grid = document.querySelector(".grid");                 //display grid
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");               //create an image element
      card.setAttribute("src", "images/blank.jpg");             //add src attribute to an image
      card.setAttribute("data-id", i);                          //add data id
      card.setAttribute("style", "height:100px; width:100px;");
      card.addEventListener("click", flipCard);
      grid.appendChild(card);                                   //add 18 cards to grid
    }
  }
  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");                  //get the id of the card that the user clicked
    cardsChosen.push(cardArray[cardId].name);                   //push the item into the (chosen) array
    cardsChosenId.push(cardId);                                 //push the cardId into cardsChosenID
    this.setAttribute("src", cardArray[cardId].img);            //show the image of the card that the user clicked
    
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");             //look for all the images->If u wanna add more images u can do (.grid images)
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "images/blank.jpg");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "images/white.jpg");
      cards[optionTwoId].setAttribute("src", "images/white.jpg");     //add white images if it is a match
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);      //remove the ability to click on the card
      cardsWon.push(cardsChosen);                                     //record how many cards/matches we have won
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "images/blank.jpg");     //flip the card back
      
    }
    cardsChosen = [];
    cardsChosenId = [];                                               //start the whole process again
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  createBoard();
});
