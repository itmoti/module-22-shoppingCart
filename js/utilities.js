// element id er string ke number e convert kore
function getTextElementById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneotal = phoneTotalElement.innerText;
    const currentPhone = parseInt(currentPhoneotal);
    return currentPhone;
}

// for subtotal 
function subTotalCalculator(){
        
        const currentPhoneTotal = getTextElementById("phone-price");
        const currentCaseTotal = getTextElementById("case-price");
        const subtotal = currentCaseTotal + currentPhoneTotal;
        console.log(currentPhoneTotal)
        const subtotalElement = document.getElementById("subtotal");
        subtotalElement.innerText = subtotal;
}