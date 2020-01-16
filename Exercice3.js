function aleatoire(min, max) {

    return (Math.floor((max-min)*Math.random())+min);
}

for (let i = 0; i < 10; i++){
    console.log(aleatoire(1,7))
}

function tab() {

    var tabtab = [];
    compteur = 0;

    while (tabtab.length < 6) {

        nbr = aleatoire(1, 7);

        if (!tabtab.includes(nbr)) {
            tabtab.push(nbr);

        }
        compteur++;
    }
    console.log(tabtab);
    console.log("Il vous à fallut " + compteur + " essai pour avoir tout les chiffres");
    return compteur;
}
console.log(tab());

/*function average(x) {

    total = 0;

    for (let i = 0; i < x; i++){
        resultat = aleatoire(1,7);
        total = total + resultat;
    }
    return total/x;
}
console.log(average(50));*/
