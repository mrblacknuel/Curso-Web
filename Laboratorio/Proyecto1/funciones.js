var usuarios = new Array();
var contador = 0;

function addUsuario(textField) {
	usuarios[contador++] = textField.value;
	var nombres = "";
	for (var i = 0; i < usuarios.length; i++) {
		nombres += usuarios[i];
	}
	alert(nombres);
}

function buscarUsuario(textField) {
	alert("Buscar");
}