function aleatoire(min, max) {

    return (Math.floor((max-min)*Math.random())+min);
}

for (let i = 0; i < 10; i++){
    console.log(aleatoire(1,7))
}
