var input=document.getElementById('input');
var result=document.getElementById('result');
var inputType=document.getElementById('inputType');
var resultType=document.getElementById('resultType');
var inputTypeValue,resultTypeValue;


input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
function swap(){
    //var input=document.getElementById('input');
    //var result=document.getElementById('result');
    var inputType=document.getElementById('inputType');
var resultType=document.getElementById('resultType');
var temp= resultType.selectedIndex;

    resultType.selectedIndex=inputType.selectedIndex
inputType.selectedIndex=temp;
myResult();
}


function myResult(){
    inputTypeValue=inputType.value;
    resultTypeValue=resultType.value;
    if(inputTypeValue==="meter" && resultTypeValue==="kilometer"){
        result.value=Number(input.value)*0.001;
    }
    else if(inputTypeValue==="meter" && resultTypeValue==="centimeter"){
        result.value=Number(input.value)*100;
    }
    else if(inputTypeValue==="meter" && resultTypeValue==="miles"){
        result.value=input.value*0.00062137;
    }
    else if(inputTypeValue==="meter" && resultTypeValue==="meter"){
        result.value=input.value;
    }
    else if(inputTypeValue==="meter" && resultTypeValue==="feet"){
        result.value=input.value*3.28;
    }


    if(inputTypeValue==="kilometer" && resultTypeValue==="meter"){
        result.value=Number(input.value)*1000;
    }
    else if(inputTypeValue==="kilometer" && resultTypeValue==="centimeter"){
        result.value=Number(input.value)*100000;
    }
    else if(inputTypeValue==="kilometer" && resultTypeValue==="kilometer"){
        result.value=input.value;
    }
    else if(inputTypeValue==="kilometer" && resultTypeValue==="miles"){
        result.value=input.value/1.609;
    }
    else if(inputTypeValue==="kilometer" && resultTypeValue==="feet"){
        result.value=input.value*3281;
    }


    if(inputTypeValue==="centimeter" && resultTypeValue==="kilometer"){
        result.value=Number(input.value)*0.00001;
    }
    else if(inputTypeValue==="centimeter" && resultTypeValue==="meter"){
        result.value=Number(input.value)*0.01;
    }
    else if(inputTypeValue==="centimeter" && resultTypeValue==="centimeter"){
        result.value=input.value;
    }
    else if(inputTypeValue==="centimeter" && resultTypeValue==="miles"){
        result.value=input.value/160900;
    }
    else if(inputTypeValue==="centimeter" && resultTypeValue==="feets"){
        result.value=input.value/30.48;
    }


    if(inputTypeValue==="miles" && resultTypeValue==="kilometer"){
        result.value=Number(input.value)*1.609;
    }
    else if(inputTypeValue==="miles" && resultTypeValue==="meter"){
        result.value=Number(input.value)*1609;
    }
    else if(inputTypeValue==="miles" && resultTypeValue==="centimeter"){
        result.value=input.value*160900;
    }
    else if(inputTypeValue==="miles" && resultTypeValue==="miles"){
        result.value=input.value;
    }
    else if(inputTypeValue==="miles" && resultTypeValue==="feets"){
        result.value=input.value*5280;
    }

    if(inputTypeValue==="feets" && resultTypeValue==="kilometer"){
        result.value=Number(input.value)/3281;
    }
    else if(inputTypeValue==="feets" && resultTypeValue==="meter"){
        result.value=Number(input.value)/3.281;
    }
    else if(inputTypeValue==="feets" && resultTypeValue==="centimeter"){
        result.value=input.value*30.48;
    }
    else if(inputTypeValue==="feets" && resultTypeValue==="miles"){
        result.value=input.value/5280;
    }
    else if(inputTypeValue==="feets" && resultTypeValue==="feets"){
        result.value=input.value;
    }














}

