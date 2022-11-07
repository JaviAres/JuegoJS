//Stage2
var presentacion2=document.getElementById("presentacion2");
function transicion2(){
  presentacion2.removeChild(presentacion2.firstElementChild);
  document.getElementById("foto").style.display='block';
  document.getElementById("boton-continuar").style.display='none';
  document.getElementById("respuesta1").style.display='block';
  document.getElementById("respuesta2").style.display='block';
  document.getElementById("respuesta3").style.display='block';
  document.getElementById("respuesta4").style.display='block';
  document.getElementById("question").style.display='block';
} ;

function correcto(){
  document.getElementById("foto").style.display='none';
  document.getElementById("boton-continuar").style.display='block';
  document.getElementById("respuesta1").style.display='none';
  document.getElementById("respuesta2").style.display='none';
  document.getElementById("respuesta3").style.display='none';
  document.getElementById("respuesta4").style.display='none';
  document.getElementById("question").style.display='block';
  document.body.style.backgroundImage="url('../images/correcto.png')";
  document.querySelector('p').innerHTML=`You actually got it right!`
}

function error(){
  document.getElementById("foto").style.display='none';
  document.getElementById("boton-continuar").style.display='block';
  document.getElementById("respuesta1").style.display='none';
  document.getElementById("respuesta2").style.display='none';
  document.getElementById("respuesta3").style.display='none';
  document.getElementById("respuesta4").style.display='none';
  document.body.style.backgroundImage="url('../images/error.png')";
}
