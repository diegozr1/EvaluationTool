
function checkListFunction(){
    var sumValues = 0.0;

//What is the impact of not doing this project?
    if(document.getElementById("sel1").value === "Low"){
        x = 5;
    }
    else if(document.getElementById("sel1").value === "Medium"){
        x = 15;
    }
    else if(document.getElementById("sel1").value === "High"){
        x = 30;
    }
    sumValues += Number(x);

//What is the project risk to our organization?
    if(document.getElementById("sel2").value === "Low"){
        x = -5;
    }
    else if(document.getElementById("sel2").value === "Medium"){
        x = -15;
    }
    else if(document.getElementById("sel2").value === "High"){
        x = -30;
    }
    sumValues += Number(x);

//Does the proposed project fit in our risk profile?
    if(document.getElementById("sel3").value === "No"){
        x = -10;
    }
    else if(document.getElementById("sel3").value === "Yes"){
        x = 10;
    }
    sumValues += Number(x);

//What is the value of the project organization?
    if(document.getElementById("sel4").value === "Low"){
        x = 10;
    }
    else if(document.getElementById("sel4").value === "Medium"){
        x = 15;
    }
    else if(document.getElementById("sel4").value === "High"){
        x = 25;
    }
    sumValues += Number(x);

//Is our organization culture right for this type of project?
    if(document.getElementById("sel5").value === "No"){
        x = -5;
    }
    else if(document.getElementById("sel5").value === "Yes"){
        x = 10;
    }
    sumValues += Number(x);

//Will internal resources be available for this project?
    if(document.getElementById("sel6").value === "No"){
        x = -15;
    }
    else if(document.getElementById("sel6").value === "Yes"){
        x = 10;
    }
    sumValues += Number(x);

//Will we have to build or buy?
    if(document.getElementById("sel7").value === "Buy"){
        x = -15;
    }
    else if(document.getElementById("sel7").value === "Rent"){
        x = -5;
    }
    else if(document.getElementById("sel7").value === "Build"){
        x = -10;
    }
    else if(document.getElementById("sel7").value === "Nothing"){
        x = 20;
    }
    sumValues += Number(x);

//Is the timeline realistic?
    if(document.getElementById("sel8").value === "No"){
        x = -15;
    }
    else if(document.getElementById("sel8").value === "Yes"){
        x = 10;
    }
    sumValues += Number(x);

//Will staff training be required?
    if(document.getElementById("sel9").value === "No"){
        x = -10;
    }
    else if(document.getElementById("sel9").value === "Yes"){
        x = 10;
    }
    sumValues += Number(x);

//Is this a new initiative or path of an existing initiative?
    if(document.getElementById("sel10").value === "New Initiative"){
        x = 15;
    }
    else if(document.getElementById("sel10").value === "A path"){
        x = 10;
    }
    sumValues += Number(x);

//How does this project interact with current projects?
    if(document.getElementById("sel11").value === "Overlaps with other projects"){
        x = -50;
    }
    else if(document.getElementById("sel11").value === "They have perfect sinergy"){
        x = 25;
    }
    else if(document.getElementById("sel11").value === "They are mutually exclusive"){
        x = 15;
    }
    sumValues += Number(x);

//Is the technology available or new?
    if(document.getElementById("sel12").value === "It´s available"){
        x = 15;
    }
    else if(document.getElementById("sel12").value === "It´s a new technology"){
        x = -5;
    }
    sumValues += Number(x);

    if(sumValues <55){
        document.getElementById("txtResultCheckList").value = "Not accepted";
    }
    else if(sumValues>=55 && sumValues<70){
        document.getElementById("txtResultCheckList").value = "Can consider";
    }
    else
    {
        document.getElementById("txtResultCheckList").value = "Accepted";
    }
}