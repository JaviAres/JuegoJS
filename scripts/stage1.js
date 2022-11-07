//Stage1

var presentacion=document.getElementById("presentacion");

function transicion(){
    presentacion.removeChild(presentacion.firstElementChild);
    document.body.style.backgroundImage="url('../images/stage1.png')";
    document.getElementById("boton-continuar").style.display='none';
    document.getElementById("mensaje").style.display='block';
}
  var HP=50;
  window.addEventListener('keydown', function (e) {
    
    document.querySelector('p').innerHTML = `Sigue pulsando!`;
    if(HP!==0){
        HP=(HP-1);
       
    }else{
         this.document.body.style.backgroundImage="url('../images/stage1V.png')";
        document.querySelector('p').innerHTML = `VICTORIA`;
        document.getElementById("boton-continuar").style.display='block'
        this.alert("Haz doble click en el boton para continuar");
    };
    console.log(HP);
  }, false);

  