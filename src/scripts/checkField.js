function email(value){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
        return true
    return false
}

function contact(value){
    if(value.length != 10)
        return false
    
    for(let i = 0; i < value.length; i++)
        if(value[i] < '0' || value[i] > '9')
            return false

    return true
}

function noSpace(value){
    for(let i = 0; i < value.length; i++){
        if(value[i] == ' ')
            return false
    }

    return true
}

function notEmpty(value){
    if(value.length == 0)
        return false
    return true
}

function minLength(value, length){
    if(value.length < length)
        return false
    return true
}

function checkField(type, value, length = 0){

    if(type == 'email')
        return email(value)

    else if(type == 'contact')
        return contact(value)

    else if(type == 'notEmpty')
        return notEmpty(value)

    else if(type == 'noSpace')
        return noSpace(value)
    
    else if(type == 'minLenght')
        return minLength(value, length)
}

export default checkField