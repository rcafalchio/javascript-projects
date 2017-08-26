/**
 * JS responsável por eventos na página Index
 */

	
function adicionarPaciente(){
	//Recupera os dados do paciente
	var paciente = {
			nome : document.querySelector("#campo-nome").value,
			peso : document.querySelector("#campo-peso").value,
			altura : document.querySelector("#campo-altura").value
	};
	
	atualizarListaPaciente(paciente);
	limparFormulario();
}

function limparFormulario(){
	//Limpa o formulário
	document.querySelector("#campo-nome").value = "";
	document.querySelector("#campo-peso").value = "";
	document.querySelector("#campo-altura").value = "";
}

function atualizarListaPaciente(paciente){
	//Preenche TR
	var novoTR = 
	'<tr class="paciente">'+
	'<td class="info-nome">' +paciente.nome + '</td>'+
	'<td class="info-peso" id="peso-2">' +paciente.peso+ '</td>'+
	'<td class="info-altura" id="altura-2">' +paciente.altura+ '</td>'+
	'<td class="info-imc" id="imc-2"></td>'+
	'</tr>'
	
	//Adiciona o paciente na lista
	var tabela = document.getElementById("tabela-pacientes");
	tabela.innerHTML = tabela.innerHTML + novoTR;
	event.preventDefault(); // impede comportamento padrão
}


function calcularTodosImcs(){
	
	var trsPacientes = document.getElementsByClassName("paciente"); //Array
	console.log('Quantidade de pacientes ' + trsPacientes.length);

	for(var contador = 0;contador <= trsPacientes.length -1;contador++){
		var pacienteTr = trsPacientes[contador];
		var tdNome   = pacienteTr.getElementsByClassName("info-nome")[0];
		var tdPeso   = pacienteTr.getElementsByClassName("info-peso")[0];
		var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
		var paciente = {nome : tdNome.textContent, 
						peso : tdPeso.textContent, 
						altura : tdAltura.textContent, 
						imc: calcularImc};
		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = paciente.imc();
		
	}
}

function calcularImc(){
	
	console.log('Calculando IMC...');
	var imc = -1;
	
	if (this.altura != 0) {
		var imc = this.peso / (this.altura * this.altura);//25
	}else{
		//alert('Não foi possível dividir, altura com zero');
		console.log('Não foi possível dividir, altura com zero');
	}
	
	return imc;
}
