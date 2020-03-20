// Cuando se cargue el documento HTML se llamará a iniciaDatos
window.onload = iniciaDatos;

function iniciaDatos() {
	// Cuando se haga click en el link se llamará a la función validaSalir
	document.getElementById('link').onclick = validaSalir;
	// Cuando se haga click en el link para buscar se llamará a la función busqueda
	document.getElementById('linkSearch').onclick = busqueda;
}

// Le pregunta al usuario si de verdad quiere abandonar la página
function validaSalir() {
	if (confirm("¿Desea salir del sitio?")) {
		alert("Nos vamos a Google");
		return true; // Devuelve verdadero y accede a la página
	} else {
		alert("Nos quedamos en el sitio");
		return false; // Devuelve falso para no acceder al sitio
	}
}

// Pide una cadena para buscar en Google
function busqueda() {
	// Se le pide la cadena al usuario
	var respuesta = prompt("Cadena a buscar", "");

	// Si respuesta no es nulo se realiza la busqueda
	if (respuesta) {
		alert("Lo que quieres buscar es " + respuesta);

		// Con this se accede al elemento que provocó la llamada a esta función
		var nuevoLink = this + "search?q=" + respuesta;
		alert("El nuevo link es " + nuevoLink);

		// Cambiamos la URL de la página
		window.location = nuevoLink;
	}

	// Devuelve falso para que no acceda al link viejo
	return false;
}