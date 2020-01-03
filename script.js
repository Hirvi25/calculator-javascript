window.addEventListener("keydown", checkKeyPress, false);
let answerbox = document.getElementById('answerstyle');

function getKeyValue(){
   
    if(event.target.value === "="){
        answerbox.value = eval(answerbox.value);
    }
    else if(event.target.value == 'Clear'){
        answerbox.value = ' ';
    }
    else{
        answerbox.value += event.target.value;
    }

}


function checkKeyPress(key){

    let keyvalue = String.fromCharCode(key.keyCode);

    if(keyvalue >= parseInt('0') && keyvalue <= parseInt('9')){
         answerbox.value += String.fromCharCode(key.keyCode);
    }
    if(key.keyCode == 111){
        answerbox.value += '/';
    }
    if(key.keyCode == 109){
        answerbox.value += '-';
    }
    if(key.keyCode == 106){
        answerbox.value += '*';
    }
    if(key.keyCode == 107){
        answerbox.value += '+';
    }
    if(key.keyCode == 187){
        answerbox.value = eval(answerbox.value);
    }
    if( key.keyCode == 13){
        answerbox.value = eval(answerbox.value);
    }
    if(key.keyCode == 8){
        let aswer = answerbox.value;
        let newStr = aswer.substring(0, aswer.length-1);
        answerbox.value = newStr;
    }

}






