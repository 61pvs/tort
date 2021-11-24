document.addEventListener("DOMContentLoaded", function() {
    ves();
   korgy();
  });
var korg;
var koef;
function ves(){
    koef=document.getElementById("ves").value/1000;
    korgy();
}
function korgy(){
    var rarr=document.getElementsByName("korg");
    document.getElementById("korgy0").innerHTML=parseInt(500*koef);
    document.getElementById("korgy1").innerHTML=parseInt(450*koef);
    document.getElementById("korgy2").innerHTML=parseInt(550*koef);
    document.getElementById("korgy3").innerHTML=parseInt(400*koef);
    document.getElementById("korgy4").innerHTML=parseInt(600*koef);
    for (var i=0;i<5;i++){
        if(rarr[i].checked){
            korg=Number(document.getElementById("korgy"+i).innerText);
        } 
    }
}