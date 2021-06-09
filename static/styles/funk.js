function move (laukums){
    if(laukums.innerHTML==""){
        laukums.innerHTML='<img src="static/images/rooda.svg" alt="rook dark" class="figura">'
}
else{
        laukums.innerHTML="";
    }
}

//parādīšanas un slēpšanas funkcija attēliem sākums
function parad() {
    var x = document.getElementById("sahalau");
    var y = document.getElementById("krusts");
    var imag = document.getElementById("atttab");

        imag.style.cursor ="default";
        x.style.display ="";
        y.style.display ="block";
        y.style.cursor ="pointer";
        y.style.position ="fixed";

}

function slept(){
    var x = document.getElementById("sahalau");
    var y = document.getElementById("krusts");
    var imag = document.getElementById("atttab");
    
        imag.style.cursor ="pointer";
        y.style.display="none";
        x.style.display="none";

}

//parādīšanas un slēpšanas funkcija attēliem beigas

// parādīšanas un slepsana funkcija sadaļām sākums

function sakumla(){
    var sak = document.getElementById("sakumlapa1");
    var tab = document.getElementById("tabula1");

    tab.style.cursor ="pointer";
    sak.style.cursor="default"

}

function tabul(){
    var sak = document.getElementById("sakumlapa1");
    var tab = document.getElementById("tabula1");
    var x = document.getElementById("sahalau");
    var y = document.getElementById("krusts");

    sak.style.cursor ="pointer";
    y.style.display="none";
    x.style.display="none";
    tab.style.cursor="default"
}

// parādīšanas un slepsana funkcija sadaļām beigas