/**
 * Funções comuns
 */
function percorrerArray(array, comportamento){
	
	for(var count = 0; count < array.length;count++){
		comportamento(array[count]);
	}
	
}