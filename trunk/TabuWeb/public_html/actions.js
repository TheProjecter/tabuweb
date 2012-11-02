
var jogoPausado = true;
var colocouNome = false;
var play1, play2, play3, play4;
var pontos;
var pos_x1 = 10;
var limite_zumbie_px = 0;
var movimento_left = 0;
var ganhou = false;

/*
 * Função que substitui o formulário de sumbissão do nome de usuário pelo
 * próprio nome recebido.
 */
function receiveUserName(nam) {
	var name = String(nam);
	if (name.match(/^[a-zA-Z]+.+.+/)) {
		document.getElementById("submit_name").innerHTML = name + " |";
		colocouNome = true;
	} else
		alert("Seu nome deve ter mais de 2 caracteres e iniciar por um caractere alfabético");
}

/*
 * Função que inicia ou acaba um jogo.
 */
function startStopGame() {
	var option = document.getElementById("control_button").innerHTML;
	if (option == "START") {
		verificaPreenchimento(); 
		/*
		* Verifica se os dados estao corretos, caso
		* contrario nao inicia o jogo
		*/
	} else if (option == "STOP") {
		document.getElementById("control_button").innerHTML = "START";
		jogoPausado = true;
	} else {
		alert("Opção inválida: " + option);
	}
}

function showConfigurations() {
	if (document.getElementById("control_button").innerHTML == "START") {
		document.getElementById("configuration_popup").style.visibility = "visible";
	}
}
function hideConfigurations() {
	document.getElementById("configuration_popup").style.visibility = "hidden";
}

/* Opções, quando mudamos alguma caracteristica do jog, é alterado aqui também! */
var dificuldade = 1, soma = 1, subt = 1, mult = 1, divi = 1, offline = 1, cenario = 1;

function verificaPreenchimento() {
	if ((soma + subt + mult + divi) == 0)
		alert("Selecione pelo menos uma opção de operação!");
	else if (!colocouNome)
		alert("Insira um nome!");
	else {
		document.getElementById("control_button").innerHTML = "STOP";
		jogoPausado = false;
		geraOperacao();
	}
}

function mudaDificuldade(valor) {dificuldade = valor;}
function mudaSoma() {if (soma == 1) soma = 0;else soma = 1;}
function mudaSubt() {if (subt == 1) subt = 0;else subt = 1;}
function mudaMult() {if (mult == 1) mult = 0;else mult = 1;}
function mudaDivi() {if (divi == 1) divi = 0;else divi = 1;}
function mudaOffline(valor) {offline = valor;}
function mudaCenario(valor) {cenario = valor;}

 /* GERA ALEATORIAMENTE AS CONTAS! */

var valor_x = 0, valor_y = 0, valor_sinal = 0, chances = 1;

function geraOperacao() {
	var x = 0, y = 0, sinal = 0, numAle1, numAle2, d;
	var sinalString = "+-x/";

	do {
		numAle1 = Math.floor((Math.random() * 4) + 1);
		if (numAle1 == 1 && soma == 1)
			sinal = 1;
		if (numAle1 == 2 && subt == 1)
			sinal = 2;
		if (numAle1 == 3 && mult == 1)
			sinal = 3;
		if (numAle1 == 4 && divi == 1)
			sinal = 4;
	} while (sinal == 0);

	numAle1 = Math.random();
	numAle2 = Math.random();

	if (dificuldade == 1) {
		if (sinal == 1) {
			x = Math.floor((numAle1 * 20) + 1);
			y = Math.floor((numAle2 * 9) + 1);
		}
		if (sinal == 2) {
			x = Math.floor((numAle1 * 20) + 1);
			y = Math.floor((numAle2 * x) + 1);
		}
		if (sinal == 3) {
			x = Math.floor((numAle1 * 4) + 1);
			y = Math.floor((numAle2 * 9) + 1);
		}
		if (sinal == 4) {
			y = Math.floor((numAle1 * 5) + 2);
			d = Math.floor((numAle2 * 10) + 2);
			x = y * d;
		}
	} else if (dificuldade == 2) {
		if (sinal == 1) {
			x = Math.floor((numAle1 * 100) + 1);
			y = Math.floor((numAle2 * 40) + 1);
		}
		if (sinal == 2) {
			x = Math.floor((numAle1 * 60) + 1);
			y = Math.floor((numAle2 * x) + 1);
		}
		if (sinal == 3) {
			x = Math.floor((numAle1 * 10) + 1);
			y = Math.floor((numAle2 * 10) + 1);
		}
		if (sinal == 4) {
			y = Math.floor((numAle1 * 10) + 2);
			d = Math.floor((numAle2 * 10) + 2);
			x = y * d;
		}
	} else if (dificuldade == 3) {
		if (sinal == 1) {
			x = Math.floor((numAle1 * 300) + 1);
			y = Math.floor((numAle2 * 100) + 1);
		}
		if (sinal == 2) {
			x = Math.floor((numAle1 * 200) + 1);
			y = Math.floor((numAle2 * 100) + 1);
		}
		if (sinal == 3) {
			x = Math.floor((numAle1 * 30) + 1);
			y = Math.floor((numAle2 * 20) + 1);
		}
		if (sinal == 4) {
			y = Math.floor((numAle1 * 50) + 2);
			d = Math.floor((numAle2 * 10) + 2);
			x = y * d;
		}
	} else if (dificuldade == 4) {
		if (sinal == 1) {
			x = Math.floor((numAle1 * 800) + 1);
			y = Math.floor((numAle2 * 500) + 1);
		}
		if (sinal == 2) {
			x = Math.floor((numAle1 * 500) + 1);
			y = Math.floor((numAle2 * 500) + 1);
		}
		if (sinal == 3) {
			x = Math.floor((numAle1 * 40) + 1);
			y = Math.floor((numAle2 * 40) + 1);
		}
		if (sinal == 4) {
			y = Math.floor((numAle1 * 100) + 2);
			d = Math.floor((numAle2 * 20) + 2);
			x = y * d;
		}
	}

	valor_x = x;
	valor_y = y;
	valor_sinal = sinal;
	chances = 1;
	ja_errou_uma_vez = false;

	document.getElementById("contas").innerHTML = x + " " + sinalString[sinal - 1] + " " + y + " = ";
	document.getElementById("resultado").style.visibility = "visible";
}

function submitenter(subm_button_id, e) {
	var keycode;
	if (window.event)
		keycode = window.event.keyCode;
	else if (e)
		keycode = e.which;
	else
		return true;

	if (keycode == 13) {
		document.getElementById(subm_button_id).onclick();
		return false;
	} else
		return true;
}

function verifica_resultado_conta(resposta){
	document.getElementById("result").value="";
	document.getElementById("mens_erro").innerHTML = "";
	
	if((valor_sinal == 1 && valor_x+valor_y == resposta) || 
	   (valor_sinal == 2 && valor_x-valor_y == resposta) ||
	   (valor_sinal == 3 && valor_x*valor_y == resposta) ||
	   (valor_sinal == 4 && valor_x/valor_y == resposta)){

		if(ja_errou_uma_vez == false){
			limite_zumbie_px += 30; 
			movimento_left = 2;
			pontos.html(parseInt(pontos.html()) + 10);
		}
		else{
			limite_zumbie_px += 20; 
			movimento_left = 1;	
			pontos.html(parseInt(pontos.html()) + 5);
		}
		geraOperacao();
	}
	else{
		if(chances > 0){
			chances--;
			ja_errou_uma_vez = true;
			document.getElementById("mens_erro").innerHTML = "Você errou!";
		}
		else{
			document.getElementById("mens_erro").innerHTML = "Perdeu 10 pontos!";
			pontos.html(parseInt(pontos.html()) - 10);
			geraOperacao();
		}
	}
}



/*    
 *  	Jquery uma biblioteca do javascript que permite diminuir algumas parte do codigo
 *	e fazer animações!
 *
 *
 *
 *
 * 
*/

function paraJogo(){
	jogoPausado = true;
	ganhou = true;
	clearInterval(play1);
	clearInterval(play2);
	clearInterval(play3);
	clearInterval(play4);
}

/* ----------------- Mexendo zumbie */

$(document).ready(function(){
	
	/*Define Limite do campo!!                -----*/	
	var limite_right = $('#field').width() - $('#zumbie_1').width() - 20;
	var pos_x2 = 10, movimento_left_2 = 0, aleatorio2;
	var pos_x3 = 10, movimento_left_3 = 0, aleatorio3;
	var pos_x4 = 10, movimento_left_4 = 0, aleatorio4;
	
	
	pontos = $("#score");
	
	/* Essa função abaixo é executada a cada x milisegundos:
	window.setInterval(function(){-- conteudo --}, tempo x);*/
	play1 = window.setInterval(function(){
		pos_x1 = pos_x1 + movimento_left;
			
		if(pos_x1 > limite_zumbie_px || pos_x1 > limite_right-50) movimento_left = 0;
		if(pos_x1 > limite_right-50 && ganhou == false){
			alert("Parabéns você ganhou!");
			paraJogo();
		}
		
		$('#zumbie_1').css({'top':50,'left':pos_x1+'px'});
		
	},50);
	
	play2 = window.setInterval(function(){
		if(!jogoPausado){
			pos_x2 = pos_x2 + movimento_left_2;
			
			aleatorio2 = Math.floor((Math.random() * 100) + 1);

			if(aleatorio2 <= 20) movimento_left_2 = 1;
			else if(aleatorio2 < 30) movimento_left_2 = 2;
			else movimento_left_2 = 0;
			
			if(pos_x2 > limite_right-50){
				movimento_left_2 = 0;
				alert("Zumbie 2 ganhou a partida!");
				paraJogo();
			}
			
			$('#zumbie_2').css({'top':150,'left':pos_x2+'px'});
		}
	},50);
	
	play3 = window.setInterval(function(){
		if(!jogoPausado){
			pos_x3 = pos_x3 + movimento_left_3;
			
			aleatorio3 = Math.floor((Math.random() * 100) + 1);

			if(aleatorio3 < 21) movimento_left_3 = 1;
			else if(aleatorio3 <= 30) movimento_left_3 = 2;
			else movimento_left_3 = 0;
			
			if(pos_x3 > limite_right-50){
				movimento_left_3 = 0;
				alert("Zumbie 3 ganhou a partida!");
				paraJogo();
			}
			
			$('#zumbie_3').css({'top':250,'left':pos_x3+'px'});
		}
	},50);
	
	play4 = window.setInterval(function(){
		if(!jogoPausado){
			pos_x4 = pos_x4 + movimento_left_4;
			
			aleatorio4 = Math.floor((Math.random() * 100) + 1);

			if(aleatorio4 < 20) movimento_left_4 = 1;
			else if(aleatorio4 < 30) movimento_left_4 = 2;
			else movimento_left_4 = 0;
			
			if(pos_x4 > limite_right-50){
				movimento_left_4 = 0;
				alert("Zumbie 4 ganhou a partida!");
				paraJogo();
			}
			
			$('#zumbie_4').css({'top':350,'left':pos_x4+'px'});
		}
	},50);
});


