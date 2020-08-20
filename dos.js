/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
//variables
  
let tipo;
let pesoKg;
let precio;
let marca;
let marcaMasCara;
let marcaMasBarata;
let seguir;
let liquidoMasCaro;
let acumPeso = 0;
let solidoMasBarato = 0;
let flagCaroLiquido = 0;
let flagBaratoSolido = 0;

//bucle para pedir productos hasta que el cliente quiera
do{
  //marca
  marca = prompt("Ingrese la marca del producto: ");
  while (marca == "" || !isNaN(marca)) {
    marca = prompt("Incorrecto. Ingrese la marca del producto: ");
  }
  //precio
  precio = parseFloat(prompt("Ingrese el precio del producto: "));
  while (isNaN(precio) || precio < 0) {
    precio = parseFloat(prompt("iNCORRECTO!! Ingrese el precio del producto(solo numeros): "));
  }

  //peso en KG
  pesoKg = parseFloat(prompt("Ingrese el peso en KG del producto: "));
  while (isNaN(pesoKg) || pesoKg <= 0 || pesoKg > 1000) {
    pesoKg = parseFloat(prompt("iNCORRECTO!! Ingrese el peso del producto(en Kilogramos): "));
  }

  //tipo solido o liquido
  tipo = prompt("Ingrese el tipo de producto (Liquido o Solido): ").toLowerCase();
  while (tipo != "liquido" && tipo != "solido") {
    tipo = prompt("INCORRECTO!! Ingrese el tipo de producto (Liquido o Solido): ").toLowerCase();
  }


  //acumular o sumar valores cada vez que pase
  switch (tipo) {
    case "liquido":
      if (flagCaroLiquido == 0 || liquidoMasCaro < precio) {
        liquidoMasCaro = precio;
        marcaMasCara = marca;
        flagCaroLiquido = 1;
      }     
      break;
  
    case "solido":
      if (flagBaratoSolido == 0 || solidoMasBarato > precio) {
        solidoMasBarato = precio;
        marcaMasBarata = marca;
        flagBaratoSolido = 1;
      }
      break;
      
    }
    //peso total
    acumPeso = acumPeso + pesoKg;

seguir = prompt("Desea ingresar otro producto?: ");
}while(seguir == 'si');

//informar-----------------------------------------------------

//a)informar el peso total de la compra.
alert("El peso total de la compra es: " + acumPeso + "KG");

//b)la marca del más caro de los líquidos
if (flagCaroLiquido == 1) {
  alert("De los liquidos, la marca mas cara es: " + marcaMasCara + "\n"
  + "con un precio de " + liquidoMasCaro);
}else{
  alert("No ingreso liquido");
}

//c)la marca del más barato de los sólidos
if (flagBaratoSolido == 1) {
 alert("De los solidos la marca mas barata es: " + marcaMasBarata 
 + " con un precio de " + solidoMasBarato);
 
}else{
 alert("No ingreso solido");
}

}
