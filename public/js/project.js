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

  $("#tpWheight1").html(codigo1);
  $("#tpValue1").html(codigo);
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

  $("#Tswheight").html(codigo1);
  $("#tsValue2").html(codigo);
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

  $("#Ttwheight").html(codigo);
  $("#ttValue3").html(codigo1);
  return total.toFixed(2)
}

function finalWeightp(){
  if(isNaN((tWeightP(4)/100*parseFloat($('#pWeighti').val())).toFixed(2))){
    var codigo = 0;
  }else {
    var codigo = '<p>'+(tWeightP(4)/100*parseFloat($('#pWeighti').val())).toFixed(2)+'</p>';
  }
  $("#fValue1").html(codigo);

  if(isNaN((tWeightS(10)/100*parseFloat($('#sWeighti').val()).toFixed(2)))){
    var codigo = 0;
  }else {
    var codigo = '<p>'+(tWeightS(10)/100*parseFloat($('#sWeighti').val()).toFixed(2))+'</p>';
  }
    $("#fValue2").html(codigo);
  if(isNaN((tWeightT(8)/100*parseFloat($('#tWeighti').val())).toFixed(2))){
    var codigo = 0;
  }else {
    var codigo = '<p>'+(tWeightT(8)/100*parseFloat($('#tWeighti').val())).toFixed(2)+'</p>';
  }
  $("#fValue3").html(codigo);
}

function showWeight(){

  finalWeightp()




}
