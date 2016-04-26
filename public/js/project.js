function weightP(n){
  var rating = parseFloat($('#pRating' + n).val());
  var weight = parseFloat($('#pWheight' + n).val());

  if(isNaN(weight/5*rating)){ // check if the number in the textbox is zero
    var codigo = '<p>'+0+'</p>';
  }else{
    var codigo = '<p>'+weight/5*rating+'</p>';
  }
  $('#pValue'+n).html(codigo);
  return weight/5*rating
}

function tWeightP(n){
  var total = 0;
  var total1 = 0;
  for (var i = 1; i < n + 1; i++) {
    total1 = total1 + parseFloat($('#pWheight' + i).val());
    total = total + weightP(i);
  }
  var codigo = '<p>'+total+'</p>';
  var codigo1 = '<p>'+total1+'</p>';
  $("#tpWheight1").html(codigo1);
  $("#tpValue1").html(codigo);
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
  }
  //var codigo = '<p>'+weight/5*rating+'</p>';


}

function tWeightS(n){
  var total = 0;
  var total1 = 0;
  for (var i = 1; i < n + 1; i++) {

    total1 = total1 + parseFloat($('#sValue' + i).val());
    total = total + weightP(i);

  }
  var codigo = '<p>'+total+'</p>';
  var codigo1 = '<p>'+total1+'</p>';

  $("#tsWheight2").html(codigo);
  $("#tsValue2").html(codigo1);

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

    total1 = total1 + parseFloat($('#tValue' + i).val());
    total = total + weightP(i);

  }
  var codigo = '<p>'+total+'</p>';
  var codigo1 = '<p>'+total1+'</p>';

  $("#ttWheight3").html(codigo);
  $("#ttValue3").html(codigo1);
}

function showWeight(){

  tWeightP(4)

  for (var i = 1; i <= 10; i++) {
    weightS(i);
  }
  tWeightS(10)

  for (var i = 1; i <= 8; i++) {
    weightT(i);
  }
  tWeightT(8)
}
