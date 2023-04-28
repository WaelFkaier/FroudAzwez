function clickJouer () {
    let playerZero = document.getElementById("j0").checked
    let playerOne = document.getElementById("j1").checked
    let playerTwo = document.getElementById("j2").checked
    let playerThree = document.getElementById("j3").checked
    let playerFour = document.getElementById("j4").checked
    let playerFive = document.getElementById("j5").checked
    let bot = Math.round(Math.random()*5)
    let choixOrdi = document.getElementById("choixo")
    choixOrdi.src = "images/j"+bot+".jpg"
    let Resultat = 0
    if (playerZero) {
        Resultat=bot+0
    } if (playerOne) {
        Resultat=bot+1
    } else if (playerTwo) {
        Resultat=bot+2
    } else if (playerThree) {
        Resultat=bot+3
    } else if (playerFour) {
        Resultat=bot+4
    } else {
        Resultat=bot+5
    }
let Perdu = document.getElementById("perdu")
let Gagner = document.getElementById("gagner")
Perdu.style.display="none"
Gagner.style.display="none"
    if (Resultat%2!=0) {
        Perdu.style.display="block"
    } else {
        Gagner.style.display="block"
    }
}
