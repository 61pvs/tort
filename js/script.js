document.addEventListener("DOMContentLoaded", function() {
    ves();
    load();
   korgy();
   propit();
   prosl();
   krem();
   dekor();
   podlog();
   box();
   zakaz();
   dost();
   stoim();
  });

var koef;
var korg;
var propitka;
var prosloika;
var cream;
var dekorx;
var podlogka;
var upak;
var zakazx;
var dostx;

function ves(){
    koef=document.getElementById("ves").value/1000;
    load();
    korgy();
    propit();
    prosl();
    krem();
    stoim();
}
function load(){
    document.getElementById("korgy0").innerHTML=parseInt(500*koef);
    document.getElementById("korgy1").innerHTML=parseInt(450*koef);
    document.getElementById("korgy2").innerHTML=parseInt(550*koef);
    document.getElementById("korgy3").innerHTML=parseInt(400*koef);
    document.getElementById("korgy4").innerHTML=parseInt(600*koef);
    document.getElementById("propit0").innerHTML=parseInt(50*koef);
    document.getElementById("propit1").innerHTML=parseInt(100*koef);
    document.getElementById("propit2").innerHTML=parseInt(80*koef);
    document.getElementById("propit3").innerHTML=parseInt(100*koef);
    document.getElementById("propit4").innerHTML=parseInt(50*koef);
    document.getElementById("prosl0").innerHTML=parseInt(110*koef);
    document.getElementById("prosl1").innerHTML=parseInt(80*koef);
    document.getElementById("prosl2").innerHTML=parseInt(150*koef);
    document.getElementById("prosl3").innerHTML=parseInt(100*koef);
    document.getElementById("prosl4").innerHTML=parseInt(50*koef);
    document.getElementById("krem0").innerHTML=parseInt(300*koef);
    document.getElementById("krem1").innerHTML=parseInt(150*koef);
    document.getElementById("krem2").innerHTML=parseInt(300*koef);
    document.getElementById("dekor0").innerHTML=parseInt(250);
    document.getElementById("dekor1").innerHTML=parseInt(350);
    document.getElementById("dekor2").innerHTML=parseInt(350);
    document.getElementById("dekor3").innerHTML=parseInt(400);
    document.getElementById("dekor4").innerHTML=parseInt(300);
    document.getElementById("podlog0").innerHTML=parseInt(30);
    document.getElementById("podlog1").innerHTML=parseInt(50);
    document.getElementById("podlog2").innerHTML=parseInt(70);
    document.getElementById("box0").innerHTML=parseInt(70);
    document.getElementById("box1").innerHTML=parseInt(100);
    document.getElementById("box2").innerHTML=parseInt(140);
    document.getElementById("zakaz1").innerHTML=parseInt(500);
    document.getElementById("dost1").innerHTML=parseInt(250);
}
function korgy(){
    var rarr=document.getElementsByName("korg");
    for (var i=0;i<5;i++){
        if(rarr[i].checked){
            korg=Number(document.getElementById("korgy"+i).innerText);
            document.getElementById("korgy_img").src="img/korgy/red" + i + ".jpg"
        } 
    }
    stoim();
}
function propit(){
    propitka = 0;
    var rarr=document.getElementsByName("propit");
    for (var i=0;i<5;i++){
        if(rarr[i].checked){
            propitka+=Number(document.getElementById("propit"+i).innerText);
        } 
    }
    if (propitka == 0){
        document.getElementById("chkbox").checked = true;
    }
    stoim();
}
function prosl(){
    prosloika = 0;
    var rarr=document.getElementsByName("prosl");
    for (var i=0;i<5;i++){
        if(rarr[i].checked){
            prosloika+=Number(document.getElementById("prosl"+i).innerText);
        } 
    }
    if (prosloika == 0){
        document.getElementById("chkbox1").checked = true;
    }
    stoim();
}
function krem(){
    var rarr=document.getElementsByName("krem");
    for (var i=0;i<3;i++){
        if(rarr[i].checked){
            cream=Number(document.getElementById("krem"+i).innerText);
            document.getElementById("krem_img").src="img/krem/chis" + i + ".jpg"
        } 
    }
    stoim();
}
function dekor(){
    var rarr=document.getElementsByName("dekor");
    for (var i=0;i<5;i++){
        if(rarr[i].checked){
            dekorx=Number(document.getElementById("dekor"+i).innerText);
            document.getElementById("dekor_img").src="img/itog/mastika" + i + ".jpg"
        } 
    }
    stoim();
}
function podlog(){
    var rarr=document.getElementsByName("podlog");
    for (var i=0;i<3;i++){
        if(rarr[i].checked){
            podlogka=Number(document.getElementById("podlog"+i).innerText);
            document.getElementById("podlog_img").src="img/podlog/wkar" + i + ".jpg"
        } 
    }
    stoim();
}
function box(){
    var rarr=document.getElementsByName("box");
    for (var i=0;i<3;i++){
        if(rarr[i].checked){
            upak=Number(document.getElementById("box"+i).innerText);
            document.getElementById("box_img").src="img/box/plastic" + i + ".jpg"
        } 
    }
    stoim();
}
function zakaz(){
    zakazx = 0;
    var rarr=document.getElementsByName("zakaz");
    if(rarr[1].checked){
        zakazx=Number(document.getElementById("zakaz1").innerText);
    }
    stoim();     
}
function dost(){
    dostx = 0;
    var rarr=document.getElementsByName("dost");
    if(rarr[1].checked){
        dostx=Number(document.getElementById("dost1").innerText);
    }
    stoim();     
}
function stoim(){
    cena = korg + propitka + prosloika + cream + dekorx + podlogka + upak + zakazx + dostx;
    document.getElementById("cena").innerHTML = cena + " рублей";
}