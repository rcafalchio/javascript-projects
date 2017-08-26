/**
 * JS responsável por gerenciar as cores conforme os eventos
 */

var trs = document.getElementsByTagName("tr");

percorrerArray(trs, function(tr){

	tr.addEventListener("mouseover",function(){
		this.setAttribute("bgcolor","blue");
	});
	
	tr.addEventListener("mouseout",function(){
		this.setAttribute("bgcolor","white");
	});
	
});