function mostrar() {
	var tinteres = 0;
	var vprincipal = 0;
	var bandera = false;
    if( $("#cajita").is(':checked')){
    	bandera = true;
    }
    var x = parseInt($("#droplistbox").val());
    if(parseInt($("#tasainteres").val())<0 || parseInt($("#tasainteres").val())>100){
    	alert("Por favor inserta una tasa de interés válida");
    	return;
    }else if($("#principal").val()!=""){
    	tinteres = parseInt($("#tasainteres").val());
    }
    if($("#principal").val()!=""){
    	vprincipal = parseInt($("#principal").val());
    }
    agregar(x,bandera);
}

function agregar(limite,bandera){
	var codigo='<div class="row"><div class="col-md-1" style="text-align:center;">PERIOD</div><div class="col-md-3" style="text-align:center;">OUTFLOWS</div><div class="col-md-3" style="text-align:center;">INFLOWS</div><div class="col-md-3" style="text-align:center;">NET CASH FLOW</div><div class="col-md-2" style="text-align:center;">COMULATIVE CASH FLOW</div></div><br>';
	if(bandera){
		codigo +='<div class="row" id ="linea0" ><div class="col-md-1" style="text-align:center;">0</div><input type="number" class="col-md-3" id="outflow0"><input type="number" class="col-md-3" id="inflow0"><input type="number" class="col-md-3" id="netcash0" disabled><input type="number" class="col-md-2" id="comulativecash0" disabled></div><br>';
	}
	for(i=1;i<limite+1;i++){
		codigo += '<div class="row" id ="linea'+i+'" ><div class="col-md-1" style="text-align:center;">'+i+'</div><input type="number" class="col-md-3" id="outflow'+i+'"><input type="number" class="col-md-3" id="inflow'+i+'"><input type="number" class="col-md-3" id="netcash'+i+'" disabled><input type="number" class="col-md-2" id="comulativecash'+i+'" disabled></div><br>';
	}
	$("#contenedor").html(codigo);
}

function calcular(){

}

function netcashflow(inflow, outflow){
	return inflow - outflow;
}
