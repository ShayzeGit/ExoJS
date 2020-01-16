function race() {

    var tortue = 0;
    var hare = 0;

    while (tortue != 6 && hare !=6) {

    nbr = aleatoire(1, 7);

    if (nbr <= 5) {
        tortue++
    } else {
        hare = hare + 6;
    }
}
    if (tortue == 6) {
        return "tortue"
    }
    else {
        return "hare"
    }

}

function win() {

    var tortuewin = 0;
    var harewin = 0;

    for (let i = 0; i < 3; i++){

        winner = race();
        //console.log(winner);

        if (winner === "tortue") {
            tortuewin++
        } else {
            harewin++
        }
    }

    var pourcentageLievre = (harewin / (tortuewin + harewin)) * 100;
    var pourcentageTortue = 100 - pourcentageLievre;

    console.log(Math.round(pourcentageLievre)+ " % pour le lièvre");
    console.log(Math.round(pourcentageTortue)+ " % pour la tortue");
}
win();
