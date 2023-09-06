//1
function validNums(){
    if(number1Inp.value!=number2Inp.value){
        
        number2Inp.style.border="1px solid red"
        number2Label.style.color="red"
        number2Label.innerHTML="*not the same"
        return false
    }
    
    return true
}

//2
function validBiggerNums(){
    if(number1Inp.value<=number2Inp.value){
        
        number2Inp.style.border="1px solid red"
        number2Label.style.color="red"
        number2Label.innerHTML="*make it less than number 1"
        
        return false
    }
    
    return true
}

//3
function validStrEqu(){
    if(text1Inp.value!=text2Inp.value){

        text2Inp.style.border="1px solid red"
        text2Label.style.color="red"
        text2Label.innerHTML="*not the same"
        return false
    }
    text2Inp.style.border=""
    text2Label.innerHTML=""
    return true
}
//4
function validStrSameLen(){
    if(text1Inp.value.length != text2Inp.value.length){
        text2Inp.style.border="1px solid red"
        text2Label.style.color="red"
        text2Label.innerHTML="*not the same length"
        return false
    }
    return true

}

//5
function validStrFirstChar(){
    if(text1Inp.value[0] != text2Inp.value[0]){
        text2Inp.style.border="1px solid red"
        text2Label.style.color="red"
        text2Label.innerHTML="*doesn't starts with same letter"
        return false
    }
    return true

}



