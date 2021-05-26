function move (laukums){
    if(laukums.innerHTML==""){
        laukums.innerHTML='<img src="images/rooda.svg" alt="rook dark" class="figura">'
}
else{
        laukums.innerHTML="";
    }
}

function parad() {
    var x = document.getElementById("sahalau");
    var y = document.getElementById("krusts");
    var imag = document.getElementById("atteli");

        imag.style.cursor ="default";
        x.style.display ="block";
        y.style.display ="block";
        y.style.cursor ="pointer";
        
}

function slept(){
    var x = document.getElementById("sahalau");
    var y = document.getElementById("krusts");
    var imag = document.getElementById("atteli");
    
        imag.style.cursor ="pointer";
        x.style.display="none";
        y.style.display="none";

}