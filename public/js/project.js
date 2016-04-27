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
