function calcularFunction(){
    var sumPrimary = 0.0;
    var sumSecondary = 0.0;
    var sumOther = 0.0;
    var sumGrandT = 0.0;
    var sumWeightPri = 0.0;
    var sumWeightSec = 0.0;
    var sumWeightOther = 0.0;
    var sumGrandT = 0.0;
    var x = 0.0; //toma el valor del Weighting actual

    for (var i=1; i<=22; i++){

      x = document.getElementById("Weighting"+i.toString()).value;

      if(i<=4){
        sumWeightPri += Number(x);
      }
      else if(i>=5 && i<=14){
        sumWeightSec += Number(x);
      }
      else{
        sumWeightOther += Number(x);
      }

      if(document.getElementById("sel"+i.toString()).value === "Low"){
        x = Number(x*0.20);
      }
      else if(document.getElementById("sel"+i.toString()).value === "Medium"){
        x = Number(x*0.60);
      }
      else{
        x = Number(x);
      }
      if(i<=4){
        sumPrimary += Number(x);
      }
      else if(i>=5 && i<=14){
        sumSecondary += Number(x);
      }
      else{
        sumOther += Number(x);
      }
    }
sumPrimary = 80;
sumSecondary =84;
sumOther = 36;
   document.getElementById("SumWeightingPrimary").value = sumPrimary;
   document.getElementById("SumWeightingSecondary").value = sumSecondary;
   document.getElementById("SumWeightingOther").value = sumOther;

   sumGrandT = (Number(sumPrimary*document.getElementById("WeightingPrimary").value) + Number(sumSecondary*document.getElementById("WeightingSecondary").value) + Number(sumOther*document.getElementById("WeightingOther").value))/100;

   document.getElementById("SumFinalT").value = sumGrandT;

   if(sumGrandT <50){
   document.getElementById("txtDesicionFinal").value = "Not accepted";
  }
   else if(sumGrandT>=50 && sumGrandT<65){
   document.getElementById("txtDesicionFinal").value = "Can consider";
  }
   else
   {
     document.getElementById("txtDesicionFinal").value = "Accepted";
   }
}
