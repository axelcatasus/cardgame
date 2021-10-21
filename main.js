
// let deck = [];
// function deckBuilder (){
    // const suits = ['hearts', 'spades', 'clubs', 'diams'];
    // const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  
//     for (let suit in suits) {
//         for (let value in values) {
//           deck.push(`${values[value]} ${suits[suit]}`.split(" "));
//         }
//     }
//     for (let i = deck.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let temp = deck[i];
//         deck[i] = deck[j];
//         deck[j] = temp;
//     }
//     return deck
// }
// deckBuilder()
let deck = []
function getDeck(){
    const suits = ['hearts', 'spades', 'clubs', 'diams'];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
	for(var i = 0; i < suits.length; i++) {
		for(var x = 0; x < values.length; x++) {
			var card = {value: values[x], suite: suits[i]};
			deck.push(card);
		}
	}
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
	return deck;
}

getDeck()

let i = 0
let tries = 3
let points = 0

function displayCard(deck) {
    document.querySelector(".card").innerHTML =
    `
    <aside class="top">&` + deck[i].suite + `;<span class ="smalltop">`+ deck[i].value +`</span></aside>
    <span class="middle">&` + deck[i].suite + `;</span>
    <aside class="bottom">&` + deck[i].suite + `;<span class ="smallbottom">` + deck[i].value + `</span></aside>
    `
    if(deck[i].suite == "spades" || deck[i].suite == "clubs"){
        document.querySelector(".card").style.color = "black"
    } else {
        document.querySelector(".card").style.color = "rgb(206, 56, 56)"
    }
    document.querySelector(".remainingcards").innerText = deck.length-i-1 + " kort kvar att gissa"

    document.querySelector(".triesleft").innerText = tries + " försök kvar"

    document.querySelector(".point").innerText = points + " poäng"
    if(tries == 0){
        alert("YOU LOST bitch")
        location.reload()
    }
}
displayCard(deck)
console.log(deck)



document.querySelector(".guesslower")
.addEventListener("click", ()=>{
    if(deck[i].value > deck[i+1].value){
        console.log("Correct guess")
        i++
        points++
        displayCard(deck)
    } else {
        console.log("Wrong guess")
        i++
        tries--
        displayCard(deck)
    }
})
document.querySelector(".guessequal")
.addEventListener("click", ()=>{
    if(deck[i].value == deck[i+1].value){
        console.log("Correct guess")
        i++
        points++
        displayCard(deck)
    } else {
        console.log("Wrong guess")
        i++
        tries--
        displayCard(deck)
    }
})
document.querySelector(".guesshigher")
.addEventListener("click", ()=>{
    if(deck[i].value < deck[i+1].value){
        console.log("Correct guess")
        i++
        points++
        displayCard(deck)
    } else {
        console.log("Wrong guess")
        i++
        tries--
        displayCard(deck)
    }
})
