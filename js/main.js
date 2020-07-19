const inputs = document.querySelectorAll(".input");

function rand(n) {
  // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
  return Math.floor(Math.random() * n + 1);
}

var cambia_imagen = new Array();
cambia_imagen[0] = "../img/ejercicio0.svg";
cambia_imagen[1] = "../img/ejercicio1.svg";
cambia_imagen[2] = "../img/ejercicio2.svg";
cambia_imagen[3] = "../img/ejercicio3.svg";
cambia_imagen[4] = "../img/ejercicio4.svg";
cambia_imagen[5] = "../img/ejercicio5.svg";

function cambiar() {
  document.getElementById("imagenEjercicio").src = cambia_imagen[rand(cambia_imagen.length) - 1];
}

function calcularIMC(){
	pesitoInicial = document.getElementById("pesoInicial").value;
	tallita = document.getElementById("talla").value;
	imc = 0;
	imc = pesitoInicial / (tallita * tallita)
	pesitoMaximo = 24.5 * (tallita * tallita)
	
	if (document.getElementById("talla").value != ""){
	document.getElementById("imcInicial").focus();
	document.getElementById("imcInicial").value = imc;	

	document.getElementById("pesoMaximo").value = pesitoMaximo;	
	document.getElementById("pesoMaximo").focus();
	
	//Bajo Peso
	imc < 16.00 ?  document.getElementById("estadoNutricional").value = "Delgadez Severa" : "";	
	imc >= 16.00 && imc <=16.99 ?  document.getElementById("estadoNutricional").value = "Delgadez Moderada" : "";	
	imc >= 17 && imc <=18.49 ?  document.getElementById("estadoNutricional").value = "Delgadez Aceptable" : "";	
	
	// Normal
	imc  >=18.5 && imc <= 24.99 ?  document.getElementById("estadoNutricional").value = "Normal" : "";	

	// Sobrepeso
	imc >=25 && imc <=29.99 ?  document.getElementById("estadoNutricional").value = "Sobrepeso" : "";	

	// Obeso
	imc >= 30 && imc <= 34.99 ?  document.getElementById("estadoNutricional").value = "Obeso tipo 1" : "";	
	imc >= 35 && imc <= 39.99 ?  document.getElementById("estadoNutricional").value = "Obeso tipo 2" : "";	
	imc >= 40 ?  document.getElementById("estadoNutricional").value = "Obeso tipo 3" : "";

	document.getElementById("estadoNutricional").focus();
	}	
}

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
