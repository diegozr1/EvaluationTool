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
      $("#cajita").prop('checked', true);
      bandera = true;
    }
    agregar(x,bandera,vprincipal);
}

function agregar(limite,bandera,principal){
  var codigo='<div class="row" ><div class="col-md-1" style="text-align:center;">PERIOD</div><div class="col-md-3" style="text-align:center;">OUTFLOWS</div><div class="col-md-3" style="text-align:center;">INFLOWS</div><div class="col-md-3" style="text-align:center;">NET CASH FLOW</div><div class="col-md-2" style="text-align:center;">COMULATIVE CASH FLOW</div></div>';
  if(bandera){
    codigo +='<div class="row"  id ="linea0" ><div class="col-md-1" style="text-align:center;">0</div><input type="number" class="col-md-3" id="outflow0" value="'+principal+'"><input type="number" class="col-md-3" id="inflow0" value="0"><input type="number" class="col-md-3" id="netcash0" disabled><input type="number" class="col-md-2" id="comulativecash0" disabled></div><br>';
  }
  for(i=1;i<limite+1;i++){
    codigo += '<div class="row"  id ="linea'+i+'" ><div class="col-md-1" style="text-align:center;">'+i+'</div><input type="number" class="col-md-3" id="outflow'+i+'" value="0"><input type="number" class="col-md-3" id="inflow'+i+'" value="0"><input type="number" class="col-md-3" id="netcash'+i+'" disabled ><input type="number" class="col-md-2" id="comulativecash'+i+'" disabled></div><br>';
  }
    codigo += '<div class="row"  id ="linea'+i+'" ><div class="col-md-4" style="text-align:center;"><button type="button" class="btn btn-default" onclick="imprimirresultados()" >Show NPV</button></div><div class="col-md-1" ></div><input type="number" class="col-md-5" id="netpresentvalue" disabled><div class="col-md-1" ></div></div><br>';
  $("#contenedor").html(codigo);
}

function valores() {
    var netCashFlows = [];
    var interest = parseFloat($("#tasainteres").val()) / 100;
    //var tax = parseFloat($("#tax").val()) / 100;
    var length = parseInt($("#droplistbox").val());
    var inflow = parseFloat($("#inflow0").val());
    var outflow = parseFloat($("#outflow0").val());

    if (isNaN(inflow)) {
      inflow = 0;
    }

    if (isNaN(outflow)) {
      outflow = 0;
    }

    var net = inflow - outflow;
    var COF = 0;
    var cum = net;

    netCashFlows.push(net);
    // Set Net y cumulative de period 0.
    $("#netcash0").val(net);
    $("#comulativecash0").val(cum);

    if (isNaN(interest)) {
      interest = 0;
    }

    // Recorrer desde 1 hasta length.
    for (var i = 1; i < length + 1; i++) {

        // Calcular net (inflow - outflow)
        inflow = parseInt($('#inflow' + i).val());
        outflow = parseInt($('#outflow' + i).val());

        if (isNaN(inflow)) {
          inflow = 0;
        }

        if (isNaN(outflow)) {
          outflow = 0;
        }

        net = inflow - outflow;
        netCashFlows.push(net);

        // Calcular COF
        if (cum < 0) {
            COF = cum * interest;
        } else {
            COF = 0;
        }

        // Calcular Cumulative.
        cum += (net + COF);

        // Set net and cumulative.
        $('#netcash' + i).val(net);
        $('#comulativecash' + i).val(cum);
    }
    return netCashFlows;
}

function imprimirresultados() {
    var netCashFlows = valores();
    var interest = parseFloat($("#tasainteres").val()) / 100;
    var tax = parseFloat($("#tax").val()) / 100;
    var npv = 0;

    if (isNaN(interest)) {
      interest = 0;
    }

    if (isNaN(tax)) {
      tax = 0;
    }

    for (var i = 0; i < netCashFlows.length; i++) {
        console.log(netCashFlows[i]);
        npv += (netCashFlows[i] * (1 - tax)) / (Math.pow(1 + interest, i));
    }
    $("#netpresentvalue").val(npv);
}

function netcashflow(inflow, outflow) {
  return inflow - outflow;
}

function printpdf(){
  var x = parseInt($("#droplistbox").val());
  var url ="http://generatepdf-ddnsnet.rhcloud.com/second.php?periods="+(x+1);
  var contenedoroutflow = "&outflow[]=";
  var contenedorinflow = "&inflow[]=";
  var contenedorcomu = "&comu[]=";
  var contenedornetcash = "&netcash[]=";
  var contendorfinal;
  for(i=0;i<x+1;i++){
    contendorfinal += contenedoroutflow+ (parseFloat($("#outflow"+i).val())*-1)+contenedorinflow+parseFloat($("#inflow"+i).val()) +contenedorcomu+parseFloat($("#comulativecash"+i).val())+contenedornetcash+parseFloat($("#netcash"+i).val());
  }
  url +=contendorfinal+"&netpresent="+parseFloat($("#netpresentvalue").val());

  window.open(url);
}
