function getInputValueById(id) {
    const getValue = document.getElementById(id).value;
    const convertedValue = parseFloat(getValue);
    return convertedValue;
}

function getTextValueById(id){
    const getValue = document.getElementById(id).innerText;
    const convertedValue = parseFloat(getValue);
    return convertedValue;
}

function setInnerTextByIdAndValue(id,value){
    document.getElementById(id).innerText = value;
}
