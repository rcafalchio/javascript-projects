class Negociacao{
	
	constructor(data, quantidade, valor){
		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;
		Object.freeze(this);
	}
	
	get volume(){ // Convenção JS para acessar metodos gets
		return this._quantidade * this._valor;
	}

	get data(){// Convenção JS para acessar metodos gets
		return new Date(this._data.getTime());
	}

	get quantidade(){// Convenção JS para acessar metodos gets
		return this._quantidade;
	}

	get valor(){// Convenção JS para acessar metodos gets
		return this._valor;
	}
}