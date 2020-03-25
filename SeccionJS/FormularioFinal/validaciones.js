// Funcion para validar los elementos del formulario
function validarForma(form) {
	// Validamos el usuario
	var usuario = form.usuario;
	if (usuario.value == "" || usuario.value == "Escribir usuario") {
		alert("Debe proporcionar un nombre de usuario");
		usuario.focus();
		usuario.select();
		return false;
	}

	// Validamos el password
	var password = form.password;
	if (password.value == "" || password.value.length < 3) {
		alert("Debe proporcionar una contraseña");
		password.focus();
		password.select();
		return false;
	}

	// Validamos las tecnologías de interés
	var tecnologias = form.tecnologia;
	var checkSeleccionado = false;
	for (var i = tecnologias.length - 1; i >= 0; i--) {
		if (tecnologias[i].checked) {
			checkSeleccionado = true;
		}
	}

	if (!checkSeleccionado) {
		alert("Debe proporcionar una tecnología");
		return false;
	}

	// Validamos el género
	var generos = form.genero;
	var radioSeleccionado = false;

	for (var i = 0; i < generos.length; i++) {
		if (generos[i].checked) {
			radioSeleccionado = true;
		}
	}

	if (!radioSeleccionado) {
		alert("Debe seleccionar el genero");
		return false;
	}

	// Validamos la ocupacion
	var ocupacion = form.ocupacion;
	if (ocupacion.value == "") {
		alert("Debe seleccionar una ocupacion");
		return false;
	}

	// Formulario validado
	alert("Formulario valido, enviando datos...");
	return true;
}