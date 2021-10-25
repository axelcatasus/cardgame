
let deck = []
function getDeck(){
    const suits = ['hearts', 'spades', 'clubs', 'diams'];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
	for(let i = 0; i < suits.length; i++) {
		for(let x = 0; x < values.length; x++) {
			let card = {value: values[x], suite: suits[i], name: values[x]} ;
            if(card.name == 1){
                card.name = "A"
            }
            else if(card.name == 11){
                card.name = "Kn"
            }
            else if(card.name == 12){
                card.name = "D"
            }
            else if(card.name == 13){
                card.name = "K"
            }
            
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
if(localStorage.getItem("highScore") > 0){
    document.querySelector(".highscore").innerHTML = "Highscore: " + localStorage.getItem("highScore");
}
let i = 0
let tries = 3
let points = 0

function displayCard(deck) {
    document.querySelector(".card").style.background = "#fff"
    document.querySelector(".middle").style.display = "block"
    document.querySelector(".card").innerHTML =
    `
    <aside class="top">&` + deck[i].suite + `;<span class ="smalltop">`+ deck[i].name +`</span></aside>
    <span class="middle">&` + deck[i].suite + `;</span>
    <aside class="bottom">&` + deck[i].suite + `;<span class ="smallbottom">` + deck[i].name + `</span></aside>
    `
    if(deck[i].name == "A"){
        document.querySelector(".card").style.background = "url(gd_myh.png)"
        document.querySelector(".card").style.backgroundSize = "contain"
        document.querySelector(".card").style.backgroundSize = "75% auto"
        document.querySelector(".card").style.backgroundColor = "#fff"
        document.querySelector(".card").style.backgroundRepeat = "no-repeat"
        document.querySelector(".card").style.backgroundPosition = "center"
        document.querySelector(".middle").style.display = "none"
    }
    else if(deck[i].name == "K"){
        document.querySelector(".card").style.background = "url(https://static.wixstatic.com/media/208af0_0b99e9e9cb534d9d8c5ecf4342ed26ef~mv2.png/v1/fill/w_358,h_358,al_c,q_85,usm_0.66_1.00_0.01/zocom_utbildningschefregionstockholm_dav.webp)"
        document.querySelector(".card").style.backgroundSize = "contain"
        document.querySelector(".card").style.backgroundSize = "75% auto"
        document.querySelector(".card").style.backgroundColor = "#fff"
        document.querySelector(".card").style.backgroundRepeat = "no-repeat"
        document.querySelector(".card").style.backgroundPosition = "center"
        document.querySelector(".middle").style.display = "none"
    }
    else if(deck[i].name == "D"){
        document.querySelector(".card").style.background = "url(lotta.png)"
        document.querySelector(".card").style.backgroundSize = "contain"
        document.querySelector(".card").style.backgroundSize = "75% auto"
        document.querySelector(".card").style.backgroundColor = "#fff"
        document.querySelector(".card").style.backgroundRepeat = "no-repeat"
        document.querySelector(".card").style.backgroundPosition = "center"
        document.querySelector(".middle").style.display = "none"
    }
    else if(deck[i].name == "Kn"){
        document.querySelector(".card").style.background = "url(https://static.wixstatic.com/media/39e339_ed22d43a4c17453abdc021e0a8111bab~mv2.png/v1/fill/w_169,h_169,al_c,q_85,usm_0.66_1.00_0.01/johan_gbg.webp)"
        document.querySelector(".card").style.backgroundSize = "contain"
        document.querySelector(".card").style.backgroundSize = "75% auto"
        document.querySelector(".card").style.backgroundColor = "#fff"
        document.querySelector(".card").style.backgroundRepeat = "no-repeat"
        document.querySelector(".card").style.backgroundPosition = "center"
        document.querySelector(".middle").style.display = "none"
    }
    if(deck[i].suite == "spades" || deck[i].suite == "clubs"){
        document.querySelector(".card").style.color = "black"
    } else {
        document.querySelector(".card").style.color = "rgb(206, 56, 56)"
        // document.querySelector(".card").style.backgroundBlendMode = "rgb(206, 56, 56)"
    }
    document.querySelector(".remainingcards").innerText = deck.length-i-1 + " kort kvar att gissa"

    document.querySelector(".triesleft").innerText = tries + " försök kvar"

    document.querySelector(".point").innerText = points + " poäng"
    
    if(tries == 0){
        document.querySelector(".card").style.display = "none"
        document.querySelector(".buttons").style.display = "none"
        document.querySelector(".triesleft").style.display = "none"
        document.querySelector(".remainingcards").style.display = "none"
        document.querySelector(".point").style.display = "none"
        document.querySelector("body").style.background = "radiual-gradient(peru, lemonchiffon, peru)"
        document.querySelector(".alert").style.filter = "none"
        document.querySelector(".alert").style.display = "block"
        document.querySelector(".over").innerText = "Du fick " + points + " poäng!"
        localStorage.setItem("highScore", points);
        document.querySelector(".alert")
        .addEventListener("click", ()=>{
            location.reload()
        })
    }
}
displayCard(deck)
console.log(deck)

let point = document.querySelector(".points")

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

