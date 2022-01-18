var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};


var cantidaddevacas = aleatorio(2, 10);
var cantidaddecerdos = aleatorio(2, 10);
var cantidaddepollos = aleatorio(2, 10);

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

pollo.objeto = new Image();
pollo.objeto.src = "pollo.png";
pollo.objeto.addEventListener("load", cargarPollos);

cerdo.objeto = new Image();
cerdo.objeto.src = "cerdo.png";
cerdo.objeto.addEventListener("load", cargarCerdos);

vaca.objeto = new Image();
vaca.objeto.src = "vaca.png";
vaca.objeto.addEventListener("load", cargarVacas);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK == true)
  {
    papel.drawImage(fondo.objeto, 0, 0);
  }
  if(cerdo.cargaOK == true)
  {
    console.log(cantidaddecerdos);
    for(var c=0; c < cantidaddecerdos; c++)
    {
      var x = aleatorio (0, 6);
      var y = aleatorio (0, 6);
      x = x * 60;
      y = y * 60;
      papel.drawImage(cerdo.objeto, x, y);
    }
  if(pollo.cargaOK == true)
  {
    console.log(cantidaddepollos);
    for(var p=0; p < cantidaddepollos; p++)
    {
      var x = aleatorio (0, 6);
      var y = aleatorio (0, 6);
      x = x * 60;
      y = y * 60;
      papel.drawImage(pollo.objeto, x, y);
    }
  if(vaca.cargaOK == true)
  {
    console.log(cantidaddevacas);
    for(var v=0; v < cantidaddevacas; v++)
    {
      var x = aleatorio (0, 6);
      var y = aleatorio (0, 6);
      x = x * 60;
      y = y * 60;
      papel.drawImage(vaca.objeto, x, y);
    }
  }
}
}

}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
