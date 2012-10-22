

var jogoPausado = 1, colocouNome = 0;

/*
 * Função que substitui o formulário de sumbissão do nome de usuário pelo próprio nome recebido.
 */
function receiveUserName(name) {
	document.getElementById("submit_name").innerHTML = name + " |";
	colocouNome = 1;
}

/*
 * Função que inicia ou acaba um jogo.
 */
function startStopGame() {
	var option = document.getElementById("control_button").innerHTML;
	if (option == "START") {
		verificaPreenchimento(); /*Verifica se os dados estao corretos, caso contrario nao inicia o jogo*/ 	
	} else if (option == "STOP") {
		document.getElementById("control_button").innerHTML = "START";
		jogoPausado = 1;
	} else {
		alert("Opção inválida: " + option);
	}
}

function showConfigurations() {
	if (document.getElementById("control_button").innerHTML == "START") {
		document.getElementById("configuration_popup").style.visibility="visible";
	}
}
function hideConfigurations() {
	document.getElementById("configuration_popup").style.visibility="hidden";
}



/* Opções, quando mudamos alguma caracteristica do jog, é alterado aqui também! */
var dificuldade = 1, soma = 1, subt = 1, mult = 1, divi = 1, offline = 1, cenario = 1;

function verificaPreenchimento(){
	if((soma + subt + mult + divi) == 0) alert("Selecione pelo menos uma opção de operação!");
	else if(colocouNome == 0) alert("Insira um nome!")
	else{
		document.getElementById("control_button").innerHTML = "STOP";
		jogoPausado = 0;
		geraOperacao();
	}
}

function mudaDificuldade(valor){dificuldade = valor;}
function mudaSoma(){if(soma == 1) soma = 0; else soma = 1;}
function mudaSubt(){if(subt == 1) subt = 0; else subt = 1;} 
function mudaMult(){if(mult == 1) mult = 0; else mult = 1;}
function mudaDivi(){if(divi == 1) divi = 0; else divi = 1;}
function mudaOffline(valor){offline = valor;}
function mudaCenario(valor){cenario = valor;}

var valor_x = 0, valor_y = 0, valor_sinal = 0, chances = 2;

function geraOperacao() {
	var x, y, sinal = 0, numAle1, numAle2, div, sinalString;
	var sinalString = "+-x/";

	do{
		numAle1 = Math.floor((Math.random()*4)+1);
		if(numAle1 == 1 && soma == 1) sinal = 1;
		if(numAle1 == 2 && subt == 1) sinal = 2;
		if(numAle1 == 3 && mult == 1) sinal = 3;
		if(numAle1 == 4 && divi == 1) sinal = 4;
	}while(sinal == 0);
	
	numAle1 = Math.random();
	numAle2 = Math.random();
	
	if(dificuldade == 1){
			if(sinal == 1){ x = Math.floor((numAle1*20)+1); y = Math.floor((numAle2*9)+1);}
			if(sinal == 2){ x = Math.floor((numAle1*20)+1); y = Math.floor((numAle2*x)+1);}
			if(sinal == 3){ x = Math.floor((numAle1*4)+1); y = Math.floor((numAle2*9)+1);}
			if(sinal == 4){ y = Math.floor((numAle1*5)+2); div = Math.floor((numAle2*10)+2); x = y*div;}
	}
	else if(dificuldade == 2){
			if(sinal == 1){ x = Math.floor((numAle1*100)+1); y = Math.floor((numAle2*40)+1);}
			if(sinal == 2){ x = Math.floor((numAle1*60)+1); y = Math.floor((numAle2*x)+1);}
			if(sinal == 3){ x = Math.floor((numAle1*10)+1); y = Math.floor((numAle2*10)+1);}
			if(sinal == 4){ y = Math.floor((numAle1*10)+2); div = Math.floor((numAle2*10)+2); x = y*div;}
	}
	else if(dificuldade == 3){
			if(sinal == 1){ x = Math.floor((numAle1*300)+1); y = Math.floor((numAle2*100)+1);}
			if(sinal == 2){ x = Math.floor((numAle1*200)+1); y = Math.floor((numAle2*100)+1);}
			if(sinal == 3){ x = Math.floor((numAle1*30)+1); y = Math.floor((numAle2*20)+1);}
			if(sinal == 4){ y = Math.floor((numAle1*50)+2); div = Math.floor((numAle2*10)+2); x = y*div;}
	}
	else if(dificuldade == 4){
			if(sinal == 1){ x = Math.floor((numAle1*800)+1); y = Math.floor((numAle2*500)+1);}
			if(sinal == 2){ x = Math.floor((numAle1*500)+1); y = Math.floor((numAle2*500)+1);}
			if(sinal == 3){ x = Math.floor((numAle1*40)+1); y = Math.floor((numAle2*40)+1);}
			if(sinal == 4){ y = Math.floor((numAle1*100)+2); div = Math.floor((numAle2*20)+2); x = y*div;}
	}
	
	valor_x = x;
	valor_y = y;
	valor_sinal = sinal;
	chances = 2;
	
	document.getElementById("contas").innerHTML = x + " " +sinalString[sinal-1] + " " + y + " = ";
	document.getElementById("resultado").style.visibility="visible";
}


function verifica_resultado_conta(resposta){
	document.getElementById("result").value="";
	document.getElementById("mens_erro").innerHTML = "";
	
	if(valor_sinal == 1 && valor_x+valor_y == resposta) geraOperacao();
	else if(valor_sinal == 2 && valor_x-valor_y == resposta) geraOperacao();
	else if(valor_sinal == 3 && valor_x*valor_y == resposta) geraOperacao();
	else if(valor_sinal == 4 && valor_x/valor_y == resposta) geraOperacao();
	else{
		if(chances > 0){
			chances--;
			document.getElementById("mens_erro").innerHTML = "Você errou!";
		}
		else{
			document.getElementById("mens_erro").innerHTML = "Perdeu x pontos!";
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

/* ----------------- Mexendo zumbie */
var d_left, d_top, movimento_left, movimento_top, pos_x, pos_y;

// Quantos px andará cada intervalo
movimento_left = 5;
movimento_top = parseInt(Math.random()*3 + 1);

// Definindo direções 1 = positivo e 0 = negativo
d_left = parseInt(Math.random()*2);
d_top = parseInt(Math.random()*2);


/*

$(document).ready
-- isso é executado assim que a pagina estiver pronta para exibir!

*/

$(document).ready(function(){
	/* Atribui os valores iniciais!!!       ----- */
	var pos_x1 = 10, pos_y1 = 50, pos_x2 = 10, pos_y2 = 100;
	
	/*Define Limite do campo!!                -----*/	
	limite_left = 20;
	limite_right = $('#field').width() - $('#zumbie_1').width() - 20;
	
	/* Essa função abaixo é executada a cada x milisegundos:
	window.setInterval(function(){-- conteudo --}, tempo x);
		
	*/
	window.setInterval(function(){
			
		pos_x1 = d_left == 1 ? pos_x1 + movimento_left : pos_x1 - movimento_left;
		pos_y1 = d_top == 1 ? pos_y1 + movimento_top : pos_y1 - movimento_top;
				
		if(pos_x1<limite_left){
			pos_x1 = pos_x1 + movimento_left * 2;
			d_left = 1;
		}
			
		if(pos_x1>limite_right){
			pos_x1 = pos_x1 - movimento_left * 2;
			d_left = 0;
		}
				
		$('#zumbie_1').css({'top':50,'left':pos_x1+'px'});
			
	},33);
	
	window.setInterval(function(){
			
		pos_x2 = d_left == 1 ? pos_x2 + movimento_left : pos_x2 - movimento_left;
		pos_y2 = d_top == 1 ? pos_y2 + movimento_top : pos_y2 - movimento_top;
				
		if(pos_x2<limite_left){
			pos_x2 = pos_x2 + movimento_left * 2;
			d_left = 1;
		}
			
		if(pos_x2>limite_right){
			pos_x2 = pos_x2 - movimento_left * 2;
			d_left = 0;
		}
				
		$('#zumbie_2').css({'top':150,'left':pos_x2+'px'});
			
	},50);
	
});

