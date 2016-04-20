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
	var codigo='<div class="row"><div class="col-md-1" style="text-align:center;"><b>PERIOD</b></div><div class="col-md-4" style="text-align:center;"><b>OUTFLOWS</b></div><div class="col-md-4" style="text-align:center;"><b>INFLOWS</b></div><div class="col-md-3" style="text-align:center;"><b>CUMULATIVE CASH FLOW</b></div></div><br>';
	if(bandera){
		codigo +='<div class="row" id ="linea0" ><div class="col-md-1" style="text-align:center;">0</div><input type="number" class="col-md-4" id="outflow0"><input type="number" class="col-md-4" id="inflow0"><input type="number" class="col-md-3" id="comulativecash0" disabled></div><br>';
	}
	for(i=1;i<limite+1;i++){
		codigo += '<div class="row"  id ="linea'+i+'" ><div class="col-md-1" style="text-align:center;">'+i+'</div><input type="number" class="col-md-4" id="outflow'+i+'"><input type="number" class="col-md-4" id="inflow'+i+'"><input type="number" class="col-md-3" id="comulativecash'+i+'" disabled></div><br>';
	}
	$("#contenedor").html(codigo);
}

function calcular(){
  var tax;
  var interest;
  var netCashFlows;
  var length = parseInt($("#droplistbox").val());

  for (var i = 0; i < length; i++) {
    //Sumar y restar inflows y outflows.

    //Sumar con CostOfFunds.

    //Sumar net.
  }
}

function netcashflow(inflow, outflow){
  return inflow - outflow;
}
