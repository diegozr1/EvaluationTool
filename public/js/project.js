function weightP(n){
  var rating = parseFloat($('#pRating' + n).val());
  var weight = parseFloat($('#pWheight' + n).val());
  var codigo = '<p>'+weight/5*rating+'</p>';
  $('#pValue'+n).html(codigo);

}
function tWeightC(n,x){
  var total = 0;
  for (var i = 1; i < n + 1; i++) {
    total = total + parseFloat($('#pRating' + i).val());
    total = total + parseFloat($('#pWheight' + i).val());
  }
  var codigo = '<p>'+total+'</p>';
  $('#tpValue'+x).html(codigo);
}

function showWeight(){
  for (var i = 1; i < n + 1; i++) {
    weightP(i);
  }
  tWeightC(4,1)
}
