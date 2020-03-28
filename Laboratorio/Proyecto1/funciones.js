var usuarios = new Array();
var contador = 0;

function addUsuario(textField) {
	usuarios[contador++] = textField.value;
}

function buscarUsuario(textField) {
	alert("Buscar");
}