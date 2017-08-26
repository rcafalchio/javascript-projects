class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputQuantidade = $("#quantidade");
		this._inputData = $("#data");
		this._inputValor = $("#valor");
		this._listaNegociacoes = new ListaNegociacoes();
		this._view = new NegociacaoView($("#tabela-negociacoes"));
		this._mensagemView = new MensagemView($("#mensagem-view"));
		this._view.update(this._listaNegociacoes);
		this._mensagem = new Mensagem("Negociação adicionada com sucesso!");
	}

	adiciona(event){
		event.preventDefault();
		let data = DataHelper.deTextoParaDate(this._inputData.value);
		let negociacao = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);
		this._listaNegociacoes.adicionar(negociacao);
		this._view.update(this._listaNegociacoes);
		this._mensagemView.update(this._mensagem);
		this._limpaFormulario();
 	}

	_limpaFormulario(){
		this._inputQuantidade.value = 1;
		this._inputData.value = null;
		this._inputValor.value = 0.0;
		this._inputData.focus();
		//this._mensagemView.update(new Mensagem());
	}

}
