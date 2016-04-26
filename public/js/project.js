function weightP(n){
  var rating = parseFloat($('#pRating' + n).val());
  var weight = parseFloat($('#pWheight' + n).val());
  var codigo = '<p>'+weight/5*rating+'</p>';
  $('#pValue'+n).html(codigo);

}
function tWeightP(n){
  var total = 0;
  var total1 = 0;
  for (var i = 1; i < n + 1; i++) {
    total1 = total1 + parseFloat($('#pWheight' + i).val());
    total = total + parseFloat($('#pValue' + i).val());
  }
  var codigo = '<p>'+total+'</p>';
  var codigo1 = '<p>'+total1+'</p>';
  $("#tpWheight1").html(codigo1);
  $("#tpValue1").html(codigo);
}

function weightS(n){
  var rating = parseFloat($('#sRating' + n).val());
  var weight = parseFloat($('#sWheight' + n).val());
  var codigo = '<p>'+weight/5*rating+'</p>';
  $('#pValue'+n).html(codigo);

}

function tWeightS(n){
  var total = 0;
  var total1 = 0;
  for (var i = 1; i < n + 1; i++) {

    total = total + parseFloat($('#sValue' + i).val());
    total1 = total1 + parseFloat($('#sWheight' + i).val());

  }
  var codigo = '<p>'+total+'</p>';
  var codigo1 = '<p>'+total1+'</p>';

  $("#tsWheight1").html(codigo1);
  $("#tsValue1").html(codigo);
}

function showWeight(){
  for (var i = 1; i <= 4; i++) {
    weightP(i);
  }
  tWeightP(4)

  for (var i = 1; i <= 10; i++) {
    weightS(i);
  }
  tWeightS(10)

  //for (var i = 1; i <= 8; i++) {
  //  weightT(i);
  //}
  //tWeightT(8)
}
