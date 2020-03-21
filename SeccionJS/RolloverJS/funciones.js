window.onload = cargarImagenes;

// Carga el rollover en todas las imágenes
function cargarImagenes() {
	// Se recorre cada imagen del documento
	for (var i = 0; i < document.images.length; i++) {
		// Sólo tratamos las imágenes que estén encapsuladas en un ancla
		if (document.images[i].parentNode.tagName == "A") {
			configuraRollover(document.images[i]);
		}
	}
}

function configuraRollover(imagen) {
	imagen.imagenOff = new Image();
	imagen.imagenOff.src = "boton_off.jpg";
	imagen.onmouseout = cambiaOff;

	imagen.imagenOn = new Image();
	imagen.imagenOn.src = "boton_on.jpg";
	imagen.onmouseover = cambiaOn;
}

// Funciones que se disparan cuando se interactua con el botón. Handlers
function cambiaOn() {
	// Se toma el valor de la imagen on
	this.src = this.imagenOn.src;
}

function cambiaOff() {
	// Se toma el valor de la imagen off
	this.src = this.imagenOff.src;
}