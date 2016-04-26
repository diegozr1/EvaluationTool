function weightP(n){
  var rating = parseFloat($('#pRating' + n).val());
  var weight = parseFloat($('#pWheight' + n).val());
  var codigo = '<p>'+weight/5*rating+'</p>';
  $('#pValue'+n).html(codigo);

}
function tWeightP(n){
  var total = 0;
  for (var i = 1; i < n + 1; i++) {
    total = total + parseFloat($('#pRating' + i).val());
    total = total + parseFloat($('#pWheight' + i).val());
  }
  var codigo = '<p>'+total+'</p>';
  $("#tpValue1").html(codigo);
}

function weightS(n){
  var rating = parseFloat($('#pRating' + n).val());
  var weight = parseFloat($('#pWheight' + n).val());
  var codigo = '<p>'+weight/5*rating+'</p>';
  $('#pValue'+n).html(codigo);

}
function tWeightS(n){
  var total = 0;
  for (var i = 1; i < n + 1; i++) {
    total = total + parseFloat($('#pRating' + i).val());
    total = total + parseFloat($('#pWheight' + i).val());
  }
  var codigo = '<p>'+total+'</p>';
  $("#tpValue1").html(codigo);
}



function showWeight(){
  for (var i = 1; i < 4; i++) {
    weightP(i);
  }
  tWeightP(4)

  //for (var i = 1; i < 8; i++) {
  //  weightS(i);
  //}
  //tWeightS(8)
}
