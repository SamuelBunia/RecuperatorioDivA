/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	//variables
	let nombre;
	let peso;
	let sexo;
	let edad;
	let edadPromedio;
	let hombreMasPesado;
	let pesoHombreMasPesado;
	let acumEdad = 0;
	let cantidadM = 0;
	let cantidadF = 0;
	let flagHombreMasPesado = 0;

		//----------pedir datos 5 veces----------
		for (let i = 1; i <= 5; i++) {
			//nombre
			nombre = prompt(i + " Ingrese el nombre de la persona: ");
				while (!isNaN(nombre) || nombre == "") {
				nombre = prompt(i + " Invalido!! Ingrese el nombre de la persona (solo letras): ");
				}
			
			//peso
			peso = parseFloat(prompt(i + " Ingrese su peso corporal: "));
				while (isNaN(peso) || peso <= 0) {
				peso = parseFloat(prompt(i + " Incorrecto!!. Ingrese su peso corporal: "));
				}
			
			//sexo
			sexo = prompt(i + " Ingrese sexo (m o f): ").toLowerCase();
				while (sexo != 'm' && sexo != 'f') {
				sexo = prompt(i + " Sexo incorrecto!!. Ingrese sexo (m o f): ").toLowerCase();
				}
	
			//edad
			edad = parseInt(prompt("Ingrese su edad (0-110): ")); 
				while (isNaN(edad) || edad < 0 || edad > 110) {
				edad = parseInt(prompt("Edad incorrecta. Ingrese su edad (0-100): "));
				}
		
		//devido entre hombre y mujeres, acumulo cuantos son depende del sexo	
		if (sexo == 'm') {
			//si es mascuñino, si es la primera, es el de mas peso, 
			//si la primera es menor a la segunda cambio nombres
			if (flagHombreMasPesado == 0 || pesoHombreMasPesado < peso) {
				pesoHombreMasPesado = peso;
				hombreMasPesado = nombre;
				flagHombreMasPesado = 1;
			}
			//cuento hombres
			cantidadM++;			
		
		}else{
			cantidadF++;
		}



		//edad
		acumEdad = acumEdad + edad;	
	}

//cuentas
edadPromedio = acumEdad / 5;

//informar


//a)informar la cantidad de mujeres.
console.log("A.-La cantidad de personas Femeninas son: " + cantidadF);

//b)la edad promedio en total
console.log("B.-La edad promedio en total es: " + edadPromedio + " años");


//c)el hombre mas pesado (si la hay).
	if (flagHombreMasPesado == 1) {
		console.log("C.-El hombre con mas peso es: " + hombreMasPesado + " y su peso es " 
		+ pesoHombreMasPesado);
	}else{
		console.log("C.-No ingreso ningun Hombre");
	}


}
