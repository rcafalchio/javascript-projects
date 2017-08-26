class NegociacaoView extends View{

	constructor(elemento){
		super(elemento);
	}

	template(model){
		return 	 `<table class="table table-hover table-bordered">
			        <thead>
			            <tr>
			                <th>DATA</th>
			                <th>QUANTIDADE</th>
			                <th>VALOR</th>
			                <th>VOLUME</th>
			            </tr>
			        </thead>
			        
			        <tbody>

			        	${model.negociacoes.map( n => 
			        				`
			        				<tr>
			        					<td>${DataHelper.deDateParaTexto(n.data)}</td>
			        					<td>${n.quantidade}</td>
			        					<td>${n.valor}</td>
			        					<td>${n.volume}</td>
			        				</tr>
			        			   `
			        	).join('')}

			        </tbody>
			        	<td colspan="3"/>
			        	<td>
			        		${model.negociacoes.reduce((total,n) => total += n.volume, 0.0)}
			        	</td>	
			        <tfoot>


			        </tfoot>
			    </table>`;
	}

	/*IFE
			        		(function(){
				        		let total = 0;
				        		model.negociacoes.forEach( n => 
									total += n.volume );
				        		return total;
			        		})()*/
}