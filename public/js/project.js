function weightC(n){
  var rating = parseFloat($('#pRating' + n).val());
  var weight = parseFloat($('#pWheight' + n).val());
  return weight/5*rating
}
function tWeightC(n){
  var total = 0;
  for (var i = 1; i < n + 1; i++) {
    total = total + parseFloat($('#pRating' + i).val());
    total = total + parseFloat($('#pWheight' + i).val());
  }
  return total
}
