function move (laukums){
    if(laukums.innerHTML==""){
        laukums.innerHTML='<img src="static/images/rooda.svg" alt="rook dark" class="figura">'
}
else{
        laukums.innerHTML="";
    }
}

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
        // x.style.display="none";
        y.style.display="none";
        x.style.display="none";

}

function sakumla(){
    var sak = document.getElementById("sakumlapa1");
    var tab = document.getElementById("tabula1");

    tab.style.cursor ="pointer"

}

function tabul(){
    var sak = document.getElementById("sakumlapa1");
    var tab = document.getElementById("tabula1");
    var x = document.getElementById("sahalau");
    var y = document.getElementById("krusts");

    sak.style.cursor ="pointer"
    y.style.display="none";
    x.style.display="none";
}