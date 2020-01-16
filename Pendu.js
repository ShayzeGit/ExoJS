var tabWord = ["MARIO", "LUIGI", "TEEMO", "FIORA", "RACAILLOU", "PIKACHU", "LOUP", "BALEINE", "GIRAFE", "CHAT", "CHIEN", "REQUIN"];
var wordChoose = [];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var secretWord;
var time = date.now();
var tailleMot;
var coupsManque = 0;
var lettresFind = 0;
var fini = false;


placeBtn = document.getElementById("lettersContainer");

for (let i = 0; i < letters.length; i++) {
    var btn = document.createElement("button");
    btn.id = String.fromCharCode(65 + i);
    btn.className = "lettersBtn";
    btn.innerText = btn.id;
    placeBtn.appendChild(btn);
}

function secretWord(){

    secretWord = tabWord[now.getSeconds() % tabWord.length]

}

function wordSize() {
    tailleMot = secretWord.length
}


function newGame() {

    randomWord()

}

function randomWord() {

    var nb = Math.floor(Math.random() * tabWord.length);
    wordChoose = tabWord[nb];
    document.getElementById('boxDisplayWord').innerHTML = wordChoose;

    fl = wordChoose.charAt(0);
    document.getElementById("boxDisplayWord").innerHTML = fl;

}


