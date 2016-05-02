
function checkListFunction(){
    var sumValues = 0.0;

//What is the impact of not doing this project?
    if(document.getElementById("txtRespuesta4").value === "Low"){
        x = 5;
    }
    else if(document.getElementById("txtRespuesta4").value === "Medium"){
        x = 15;
    }
    else if(document.getElementById("txtRespuesta4").value === "High"){
        x = 30;
    }
    sumValues += Number(x);

//What is the project risk to our organization?
    if(document.getElementById("txtRespuesta5").value === "Low"){
        x = -5;
    }
    else if(document.getElementById("txtRespuesta5").value === "Medium"){
        x = -15;
    }
    else if(document.getElementById("txtRespuesta5").value === "High"){
        x = -30;
    }
    sumValues += Number(x);

//Does the proposed project fit in our risk profile?
    if(document.getElementById("txtRespuesta6").value === "No"){
        x = -10;
    }
    else if(document.getElementById("txtRespuesta6").value === "Yes"){
        x = 10;
    }
    sumValues += Number(x);

//What is the value of the project organization?
    if(document.getElementById("txtRespuesta7").value === "Low"){
        x = 10;
    }
    else if(document.getElementById("txtRespuesta7").value === "Medium"){
        x = 15;
    }
    else if(document.getElementById("txtRespuesta7").value === "High"){
        x = 25;
    }
    sumValues += Number(x);

//Is our organization culture right for this type of project?
    if(document.getElementById("txtRespuesta10").value === "No"){
        x = -5;
    }
    else if(document.getElementById("txtRespuesta10").value === "Yes"){
        x = 10;
    }
    sumValues += Number(x);

//Will internal resources be available for this project?
    if(document.getElementById("txtRespuesta11").value === "No"){
        x = -15;
    }
    else if(document.getElementById("txtRespuesta11").value === "Yes"){
        x = 10;
    }
    sumValues += Number(x);

//Will we have to build or buy?
    if(document.getElementById("txtRespuesta12").value === "Buy"){
        x = -15;
    }
    else if(document.getElementById("txtRespuesta12").value === "Rent"){
        x = -5;
    }
    else if(document.getElementById("txtRespuesta12").value === "Build"){
        x = -10;
    }
    else if(document.getElementById("txtRespuesta12").value === "Nothing"){
        x = 20;
    }
    sumValues += Number(x);

//Is the timeline realistic?
    if(document.getElementById("txtRespuesta14").value === "No"){
        x = -15;
    }
    else if(document.getElementById("txtRespuesta14").value === "Yes"){
        x = 10;
    }
    sumValues += Number(x);

//Will staff training be required?
    if(document.getElementById("txtRespuesta15").value === "No"){
        x = -10;
    }
    else if(document.getElementById("txtRespuesta15").value === "Yes"){
        x = 10;
    }
    sumValues += Number(x);

//Is this a new initiative or path of an existing initiative?
    if(document.getElementById("txtRespuesta17").value === "New Initiative"){
        x = 15;
    }
    else if(document.getElementById("txtRespuesta17").value === "A path"){
        x = 10;
    }
    sumValues += Number(x);

//How does this project interact with current projects?
    if(document.getElementById("txtRespuesta18").value === "Overlaps with other projects"){
        x = -50;
    }
    else if(document.getElementById("txtRespuesta18").value === "They have perfect sinergy"){
        x = 25;
    }
    else if(document.getElementById("txtRespuesta18").value === "They are mutually exclusive"){
        x = 15;
    }
    sumValues += Number(x);

//Is the technology available or new?
    if(document.getElementById("txtRespuesta19").value === "It´s available"){
        x = 15;
    }
    else if(document.getElementById("txtRespuesta19").value === "It´s a new technology"){
        x = -5;
    }
    sumValues += Number(x);


    if(sumValues <55){
        $("#txtResultCheckList").html('<div class="alert alert-danger" role="alert">Not accepted</div>');
    }
        else if(sumValues>=55 && sumValues<70){
        $("#txtResultCheckList").html('<div class="alert alert-warning" role="alert">Can consider</div>');
    }
        else
    {
        $("#txtResultCheckList").html('<div class="alert alert-success" role="alert">Project Accepted</div>');
    }
}

function printpdf(){
  var url ="http://generatepdf-ddnsnet.rhcloud.com/third.php?";
  var contenedorrespuesta = "&respuestas[]=";
  var contenedorpregunta = "&preguntas[]=";
  var contendorfinal;
  for(i=1;i<20;i++){
    contendorfinal += contenedorrespuesta+ $("#txtRespuesta"+i).val()+contenedorpregunta+$("#txtPregunta"+i).text();
  }
  url +=contendorfinal+"&result="+$("#txtResultCheckList").text();

  window.open(url);
}