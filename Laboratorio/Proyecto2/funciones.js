// Expresión regular para validar el email
var emailRE = new RegExp("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$");

function validarFormulario() {
	var nombre = document.getElementsByName('nombre')[0];

	if (!nombre.value || !isNaN(nombre.value)) {
		alert("El nombre introducido es incorrecto.");
		nombre.focus();
		return false;
	}

	var apellido = document.getElementsByName('apellido')[0];

	if (!apellido.value || !isNaN(apellido.value)) {
		alert("El apellido introducido es incorrecto.");
		apellido.focus();
		return false;
	}

	var email = document.getElementsByName('email')[0];

	if (!email.value || !isNaN(email.value) || emailRE.test(email.value)) {
		alert("El email introducido es incorrecto.");
		email.focus();
		return false;
	}

	alert("Su solicitud es correcta.");
	return true;
}