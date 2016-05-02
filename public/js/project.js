function weightP(n){
  var rating = parseFloat($('#pRating' + n).val());
  var weight = parseFloat($('#pWheight' + n).val());

  if(isNaN(weight/5*rating)){ // check if the number in the textbox is zero
    var codigo = '<p>'+0+'</p>';
    $('#pValue'+n).html(codigo);
    return 0
  }else{
    var codigo = '<p>'+weight/5*rating+'</p>';
    $('#pValue'+n).html(codigo);
    return weight/5*rating
  }

}

function tWeightP(n){
  var total = 0;
  var total1 = 0;
  for (var i = 1; i < n + 1; i++) {
    total1 = total1 + parseFloat($('#pWheight' + i).val());
    total = total + weightP(i);
  }
  if(isNaN(total1)){
    var codigo1 = '<p>'+0+'</p>';
  }else{
    var codigo1 = '<p>'+total1.toFixed(2)+'</p>';
  }
  var codigo = '<p>'+total.toFixed(2)+'</p>';

  $("#tfWheight1").html(codigo1);
  $("#tfValue1").html(codigo);
  return total.toFixed(2)
}

function weightS(n){
  var rating = parseFloat($('#sRating' + n).val());
  var weight = parseFloat($('#sWheight' + n).val());
  if(isNaN(weight/5*rating)){ // check if the number in the textbox is zero
    var codigo = '<p>'+0+'</p>';
    $('#sValue'+n).html(codigo);
    return 0
  }else{
    var codigo = '<p>'+weight/5*rating+'</p>';
    $('#sValue'+n).html(codigo);
    return weight/5*rating
    //
  }
  //var codigo = '<p>'+weight/5*rating+'</p>';


}

function tWeightS(n){
  var total = 0;
  var total1 = 0;
  for (var i = 1; i < n + 1; i++) {

    total1 = total1 + parseFloat($('#sWheight' + i).val());
    total = total + weightS(i);

  }
  var codigo = '<p>'+total.toFixed(2)+'</p>';
  if(isNaN(total1)){
    var codigo1 = '<p>'+0+'</p>';
  }else{
    var codigo1 = '<p>'+total1.toFixed(2)+'</p>';
  }

  $("#tfWheight2").html(codigo1);
  $("#tfValue2").html(codigo);
return total.toFixed(2)
}

function weightT(n){
  var rating = parseFloat($('#tRating' + n).val());
  var weight = parseFloat($('#tWheight' + n).val());
  if(isNaN(weight/5*rating)){ // check if the number in the textbox is zero
    var codigo = '<p>'+0+'</p>';
    $('#tValue'+n).html(codigo);
    return 0
  }else{
    var codigo = '<p>'+weight/5*rating+'</p>';
    $('#tValue'+n).html(codigo);
    return weight/5*rating
  }
  //var codigo = '<p>'+weight/5*rating+'</p>';


}

function tWeightT(n){
  var total = 0;
  var total1 = 0;
  for (var i = 1; i < n + 1; i++) {

    total1 = total1 + parseFloat($('#tWheight' + i).val());
    total = total + weightT(i);

  }
  var codigo = '<p>'+total.toFixed(2)+'</p>';
  if(isNaN(total1)){
    var codigo1 = '<p>'+0+'</p>';
  }else{
    var codigo1 = '<p>'+total1.toFixed(2)+'</p>';
  }

  $("#tfWheight3").html(codigo);
  $("#tfValue3").html(codigo1);
  return total.toFixed(2)
}

function finalWeightp(){
  var total=0;
  var totalInit = 0;
  if(isNaN((tWeightP(4)/100*parseFloat($('#pWeighti').val())).toFixed(2))){
    var codigo = 0;
  }else {
    total+=(tWeightP(4)/100*parseFloat($('#pWeighti').val()))
    totalInit+=parseFloat($('#pWeighti').val());
    var codigo     = '<p>'+(tWeightP(4)/100*parseFloat($('#pWeighti').val())).toFixed(2)+'</p>';
    var codigoInit = '<p>'+parseFloat($('#pWeighti').val()).toFixed(2)+'</p>'
  }
  $("#fValue1").html(codigo);
  $("#aF").html(codigo);
  $("#aI").html(codigoInit);
  if(isNaN((tWeightS(10)/100*parseFloat($('#sWeighti').val()).toFixed(2)))){
    var codigo = 0;
  }else {
    total+=(tWeightS(10)/100*parseFloat($('#sWeighti').val()))
    totalInit+=parseFloat($('#sWeighti').val());
    var codigo = '<p>'+(tWeightS(10)/100*parseFloat($('#sWeighti').val()).toFixed(2))+'</p>';
    var codigoInit = '<p>'+parseFloat($('#sWeighti').val()).toFixed(2)+'</p>'
  }
    $("#fValue2").html(codigo);
    $("#bF").html(codigo);
    $("#bI").html(codigoInit);
  if(isNaN((tWeightT(8)/100*parseFloat($('#tWeighti').val())).toFixed(2))){
    var codigo = 0;
  }else {
    total+=(tWeightT(8)/100*parseFloat($('#tWeighti').val()))
    totalInit+=parseFloat($('#tWeighti').val());
    var codigo = '<p>'+(tWeightT(8)/100*parseFloat($('#tWeighti').val())).toFixed(2)+'</p>';
    var codigoInit = '<p>'+parseFloat($('#tWeighti').val()).toFixed(2)+'</p>'
  }
  $("#fValue3").html(codigo);
  $("#cF").html(codigo);
  $("#cI").html(codigoInit);
  $("#gI").html('<p>'+totalInit.toFixed(2)+'<p>');
  $("#gF").html('<p>'+total.toFixed(2)+'<p>');

  if(total>=65){
    $("#de").html('<div class="alert alert-success" role="alert">Yes</div>');
  }
  else if (total >=50) {
    $("#de").html('<div class="alert alert-warning">Can Consider</div>');
  }
  else{
    $("#de").html('<div class="alert alert-danger">No</div>');
  }

}

function showWeight(){

  finalWeightp()


}

function printpdf(){
  var url ="http://generatepdf-ddnsnet.rhcloud.com/fourth.php?";
  var pesopartea= "&pesopartea="+parseFloat($("#pWeighti").val());
  var pesoparteb = "&pesoparteb="+parseFloat($("#sWeighti").val());;
  var pesopartec = "&pesopartec="+parseFloat($("#tWeighti").val());;
  var ratinga = "&ratinga[]=";
  var ratingb = "&ratingb[]=";
  var ratingc = "&ratingc[]=";
  var weightinga = "&weightinga[]=";
  var weightingb = "&weightingb[]=";
  var weightingc = "&weightingc[]=";
  var valuea = "&valuea[]=";
  var valueb = "&valueb[]=";
  var valuec = "&valuec[]=";
  var valorfinal ="&valorfinal[]="
  var totalfinal = "&totalfinal[]="
  var pesofinal = "&pesofinal[]="
  var contenedorfinal;
  contenedorfinal+=pesopartea+pesoparteb+pesopartec;
  for(i=1;i<5;i++){
    if($("#pRating"+i).val()==1){
      contenedorfinal+=ratinga+"Low";
    }else if($("#pRating"+i).val()==3){
      contenedorfinal+=ratinga+"Medium";
    }else if($("#pRating"+i).val()==5){
      rcontenedorfinal+=ratinga+"High";
    }else{
      rcontenedorfinal+=ratinga+"null";
    }
    contenedorfinal +=weightinga+parseFloat($("#pWheight"+i).val())+valuea+parseFloat($("#pValue"+i).text());
  }
  for(i=1;i<11;i++){
    if($("#sRating"+i).val()==1){
      contenedorfinal+=ratingb+"Low";
    }else if($("#sRating"+i).val()==3){
      contenedorfinal+=ratingb+"Medium";
    }else if($("#sRating"+i).val()==5){
      rcontenedorfinal+=ratingb+"High";
    }else{
      rcontenedorfinal+=ratingb+"null";
    }
    contenedorfinal +=weightingb+parseFloat($("#sWheight"+i).val())+valueb+parseFloat($("#sValue"+i).text());
  }
  for(i=1;i<9;i++){
    if($("#tRating"+i).val()==1){
      contenedorfinal+=ratingc+"Low";
    }else if($("#tRating"+i).val()==3){
      contenedorfinal+=ratingc+"Medium";
    }else if($("#tRating"+i).val()==5){
      rcontenedorfinal+=ratingc+"High";
    }else{
      rcontenedorfinal+=ratingc+"null";
    }
    contenedorfinal +=weightingc+parseFloat($("#tWheight"+i).val())+valuec+parseFloat($("#tValue"+i).text());
  }
  for(i=1;i<4;i++){
    contenedorfinal += valorfinal + parseFloat($("#fValue"+i).text())
    contenedorfinal += totalfinal + parseFloat($("#tfValue"+i).text())
    contenedorfinal += pesofinal + parseFloat($("#tfWheight"+i).text())
  }
  url +=contenedorfinal+"&approved="+$("#de").text();

  window.open(url);
}
