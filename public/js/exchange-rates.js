$(document).ready(function(){
    $.getJSON("https://api.coinbase.com/v2/exchange-rates",function(result){
      $("#usdmxn").append(result.data.rates['MXN'] + " ");
      $("#usdbrl").append(result.data.rates['BRL'] + " ");
      $("#usdeur").append(result.data.rates['EUR'] + " ");
      $("#usdjpy").append(result.data.rates['JPY'] + " ");
      /*
      $.each(result.data.rates['MXN'], function(i, field){
        //$("#usdmxn").append(JSON.stringify(field) + " ");
      });
      */
    });
});


function convert(){
  var value = $("#amount").val();
  $.getJSON("https://api.coinbase.com/v2/exchange-rates",function(result){

    result.data.rates['MXN'] = result.data.rates['MXN'].replace(",",".");
    result.data.rates['BRL'] = result.data.rates['BRL'].replace(",",".");
    result.data.rates['EUR'] = result.data.rates['EUR'].replace(",",".");
    result.data.rates['JPY'] = result.data.rates['JPY'].replace(",",".");

    var mxn = value*parseFloat(result.data.rates['MXN']);
    var brl = value*parseFloat(result.data.rates['BRL']);
    var eur = value*parseFloat(result.data.rates['EUR']);
    var jpy = value*parseFloat(result.data.rates['JPY']);

    $("#usdmxn").replaceWith('<h3 id="usdmxn">$'+mxn.toFixed(2)+'</h3>');
    $("#usdbrl").replaceWith('<h3 id="usdbrl">$'+brl.toFixed(2)+'</h3>');
    $("#usdeur").replaceWith('<h3 id="usdeur">$'+eur.toFixed(2)+'</h3>');
    $("#usdjpy").replaceWith('<h3 id="usdjpy">$'+jpy.toFixed(2)+'</h3>');
  });
}
