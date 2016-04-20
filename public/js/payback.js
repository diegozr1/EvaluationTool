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
  codigo+='<div class="row"  id ="linea'+i+'" ><div class="col-md-4" style="text-align:center;"><button type="button" class="btn btn-default" onclick="imprimirresultados()" >Mostrar payback period</button></div><div class="col-md-1" ></div><input type="number" class="col-md-5" id="netpresentvalue" disabled><div class="col-md-1" ></div></div><br>'
  $("#contenedor").html(codigo);
}

function valores(){
    var returnPeriod = -1
    var interest = parseFloat($("#tasainteres").val()) / 100;
    var length = parseInt($("#droplistbox").val());
    var inflow = parseInt($("#inflow0").val());
    var outflow = parseInt($("#outflow0").val());
    var net = inflow - outflow;
    var COF = 0;
    var cum = net;

    // Set cumulative de period 0.
    $("#comulativecash0").val(cum);

    // Recorrer desde 1 hasta length.
    for (var i = 1; i < length + 1; i++) {
    
        // Calcular net (inflow - outflow)
        inflow = parseInt($('#inflow' + i).val());
        outflow = parseInt($('#outflow' + i).val());
        net = inflow - outflow;

        // Calcular COF
        if (cum < 0) {
            COF = cum * interest;
        } else {
            COF = 0;
        }

        // Calcular Cumulative.
        cum += (net + COF);

        if (cum > 0 && returnPeriod == -1) {
          returnPeriod = i;
        }

        // Set net and cumulative.
        $('#comulativecash' + i).val(cum);
    }
    return returnPeriod;
}

function imprimirresultados() {
    var returnPeriod = valores();
    $("#netpresentvalue").val(returnPeriod);
}
function netcashflow(inflow, outflow) {
  return inflow - outflow;
}
