// e1 = avoir un temps h/min/sec/millisec

// e2 = l'affichage d'un chrono qui part de 00:00:00

// e3 = avoir un boutton start qui lance le chrono

// e4 = avoir un bouton pause qui met le chrono en attente

// e5 = avoir un bouton reset qui remet le chrono à zero

// e6 = avoir des tours

timeStart = 0;
timeputStop = 0;
timeIgnored = 0;
isStop = false;
displayTime = undefined;

function start(){
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;
    document.getElementById("btnReset").disabled = false;

    if(!isStop){
      timeStart = Date.now();
    }
    else{
        isStop = false;
        timeIgnored += Date.now() - timeputStop;
    }

    displayTime = setInterval(refresh,10)

}

function refresh(){
    var time = dateToString(new Date(Date.now() - timeStart - timeIgnored));
    document.getElementById("chronometre").textContent = time;
}

function dateToString(date){
    var h = date.getHours() - 1;
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();

    if (m < 10)
        m = "0" + m;
    if (s < 10)
        s = "0" + s;
    if (ms < 10)
        ms = "00" + ms;
    else if (ms < 100)
        ms =  "0" + ms;

    var chaine = m + ":" + s + ":" + ms;

    if (h > 0) {
        if (h < 10)
            h = "0" + h;
        chaine = h + ":" + chaine;
    }
    return chaine;
}

function stop(){
    clearInterval(displayTime);
    displayTime = undefined;
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;

    isStop = true;
    timeputStop = Date.now();



}

function reset(){
    clearInterval(displayTime);
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;
    document.getElementById("btnReset").disabled = true;
    document.getElementById("chronometre").textContent = "00:00:000";
    timeStart = 0;
    displayTime = undefined;
    timeputStop = 0;
    timeIgnored = 0;
    isStop = false;
}

function laps(){

}


function main() {
    reset();
}

main();