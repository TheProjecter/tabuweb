
/*
 * Função que substitui o formulário de sumbissão do nome de usuário pelo próprio nome recebido.
 */
function receiveUserName(name) {
	document.getElementById("submit_name").innerHTML = name;
}

/*
 * Função que inicia ou acaba um jogo.
 */
function startStopGame() {
	var option = document.getElementById("control_button").innerHTML;
	if (option == "START") {
		document.getElementById("control_button").innerHTML = "STOP";
		alert("Let's start the game!");
	} else if (option == "STOP") {
		document.getElementById("control_button").innerHTML = "START";
		alert("Bye bye");
	} else {
		alert("Opção inválida: " + option);
	}
}