document.addEventListener("keydown", moverPollo);

var vp = document.getElementById("villa");
var papel = vp.getContext("2d");

var fondo = {url: "tile.png",cargaOk: false}
var vaca = {url:"vaca.png",cargaOk: false}
var pollo = {url:"pollo.png",cargaOk: false}

var cantidad = aleatorio(0,25);

var xPollo = 150;
var yPollo = 150;

//OBJ. FONDO
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

//OBJ. VACA
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

//OBJ. POLLO
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo() {
  fondo.cargaOk = true;
  dibujar();
}

function cargarVaca() {
  vaca.cargaOk = true;
  dibujar();
}

function cargarPollo() {
  pollo.cargaOk = true;
  dibujarPollo();
}

function dibujar() {
  if(fondo.cargaOk) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOk) {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++) {

      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
}

function dibujarPollo () {
  if(pollo.cargaOk) {
    papel.drawImage(pollo.imagen, xPollo, yPollo);
  }
}

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function moverPollo(evento) {
  var movimiento = 10; //nos movemos 10 px
  var teclas = {UP: 38,DOWN: 40,LEFT: 37,RIGHT: 39};

  switch(evento.keyCode) {

    case teclas.UP:
    yPollo = yPollo - movimiento;
    dibujarPollo();
    break;

    case teclas.DOWN: 
    yPollo = yPollo + movimiento; //recordar en que punto estamos
    dibujarPollo();
    break;

    case teclas.LEFT: 
    xPollo = xPollo - movimiento; //recordar en que punto estamos
    dibujarPollo();
    break;

    case teclas.RIGHT: 
    xPollo = xPollo + movimiento; //recordar en que punto estamos
    dibujarPollo();
    break;
  }
}