/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular 
lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
//variables
let sexoTitular;
let lugar;
let temporada;
let cantidad;
let lugarFavorito;
let sexoMaxPasajeros;
let maxPasajeros;
let flagViaje = 0;
let contBariloche = 0;
let contCataratas = 0;
let contSalta = 0;
let contadorInvierno = 0; //cuento la cantidad de viajes en invierno
let acumInvierno = 0; //acumulo las personas que viajan en invierno
let promedio;
let seguir;


do{
    //sexo del titular
	sexoTitular = prompt(" Ingrese el sexo de la persona('m' o 'f'): ").toLowerCase();
	while ((!isNaN(sexoTitular) || (sexoTitular != 'm' && sexoTitular != 'f'))) {
	sexoTitular = prompt(" Invalido!! Ingrese el sexo ('m' o 'f'): ").toLowerCase();
	}

    //lugar
    lugar = prompt(" Ingrese destino (bariloche, cataratas o salta): ").toLowerCase();
			while (lugar != 'bariloche' && lugar != 'cataratas' && lugar != 'salta') {
			lugar = prompt(" Destino incorrecto!!. Ingrese destino (bariloche, cataratas o salta): ").toLowerCase();
			}

	//temporada
	temporada = prompt(" Ingrese temporada ('otoño','invierno', 'verano','primavera'): ").toLowerCase();
			while (temporada != 'otoño' && temporada != 'invierno' && temporada != 'verano' && temporada != 'primavera') {
			temporada = prompt(" Temporada incorrecta!! Ingrese  ('otoño','invierno', 'verano','primavera'): ").toLowerCase();
			}

    //personas que viajan
    cantidad = parseInt(prompt("Ingrese las personas que viajaran: "));
    while (isNaN(cantidad) || cantidad <= 0) {
		cantidad = parseFloat(prompt("iNCORRECTO!! Ingrese las personas que viajaran:  "));
    }


	switch (lugar) {
		case 'bariloche':

			contBariloche++;
			break;
	
		case 'cataratas':

			contCataratas++;
			break;
		
		case 'salta': 

			contSalta++;
			break;
	}
	//sexo del titular con mas pasajeros
	if ( flagViaje == 0 || cantidad > maxPasajeros) {
		maxPasajeros = cantidad;
		sexoMaxPasajeros = sexoTitular;
		flagViaje = 1;
	}

	//de invierno cuantas personas viajan 
	if (temporada == 'invierno') {
		contadorInvierno++;
		acumInvierno = acumInvierno + cantidad;
	}

	//sigo?
  seguir = prompt("Desea ingresar otro Viaje?: ");
 }while(seguir == 'si');


//saber cual es el contador de lugar mayor
if (contBariloche > contCataratas && contBariloche > contSalta) {
	lugarFavorito = "Bariloche";
}else if (contCataratas >= contBariloche && contCataratas > contSalta) {
	lugarFavorito = "Cataratas";
}else{
	lugarFavorito = "Salta";
}

//el promedio
if (contadorInvierno != 0) {
	promedio = acumInvierno / contadorInvierno;
}

//a)el lugar más elegido
alert("A.- El lugar mas elegido es: " + lugarFavorito);

//b)el sexo de titular que lleva más pasajeros.
alert("B.- El sexo del titular que lleva mas pasajeros es: " + sexoMaxPasajeros + " con " + maxPasajeros + " Pasajeros");

//c)el promedio de personas por viaje,  que viajan en invierno
alert("C.- El promedio de personas por viaje, que viajan en Invierno es: " + promedio);
}
