
function isAllValidUser(){
    var validArr=[validUserName(),validEmail(),validAge(),validPassword()]
    for (let i = 0; i < validArr.length; i++) {
        if(!validArr[i])
        {
            return false
        }
    }
    return true;
}

function validUserName(){
    if(userNameInp.value.length>10 || userNameInp.value.length<0){

        userNameInp.style.border="1px solid red"
        userNameLabel.innerHTML="*not within "
        return false
    }
    userNameInp.style.border=""
    userNameLabel.innerHTML=""
    return true
}


function validEmail(){
    if(userMailInp.value.substr(-4)!=".com")
    {
        userMailInp.style.border="1px solid red"
        userMailLabel.innerHTML="*doesn't end with .com"
        return false
    }
    userMailInp.style.border=""
    userMailLabel.innerHTML=""
    return true
}
function validAge(){
    var comparedDate= new Date()
    comparedDate= comparedDate.setFullYear(comparedDate.getFullYear()-18)
    if(new Date(userAgeInp.value)>comparedDate)
    {
        userAgeInp.style.border="1px solid red"
        userAgeLabel.innerHTML="*not above 18 Y/O"
        return false
    }
    userAgeInp.style.border=""
    userAgeLabel.innerHTML=""
    return true
}

function validPassword(){
    if(passwordInp.value!=passwordCopyInp.value){
        passwordCopyInp.style.border="1px solid red"
        passwordLabel.innerHTML="*passwords not the same"
        return false
    }
    passwordCopyInp.style.border=""
    passwordLabel.innerHTML=""
    return true
}
