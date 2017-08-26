class DataHelper{
	
	constructor(){
		throw Error('DataHelper não pode ser instanciada.')
	}

	static deDateParaTexto(date){
		return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	}

	static deTextoParaDate(texto){

		if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
			throw Error('Formato informado inválido. Formato correto aaaa-mm-dd');
		}

		//Retorna a data fazendo um split do texto, e se for o segundo indice de texto(if(index == 1)) 
		//ele subtrai 1 da variável em questão. Fazendo com que o mês fique com o valor correto.
		return new Date(...texto.split('-').map((numero,index) => {

			if(index == 1){
				numero = numero - 1;
			}
			return numero;
			
		}));
	}

}