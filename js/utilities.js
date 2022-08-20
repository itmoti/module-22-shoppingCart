// element id er string ke number e convert kore
function getTextElementById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneotal = phoneTotalElement.innerText;
    const currentPhone = parseInt(currentPhoneotal);
    return currentPhone;
}
  
// kono element e value bosano
function settextElementById(elementId , value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;
}

// for subtotal 
function subTotalCalculator(){
        
        const currentPhoneTotal = getTextElementById("phone-price");
        const currentCaseTotal = getTextElementById("case-price");
        const subtotal = currentCaseTotal + currentPhoneTotal;
    
       
        settextElementById("subtotal" , subtotal)

        // calculate tax
const taxAmountString = (subtotal * 0.1).toFixed(2);
const taxAmount = parseFloat(taxAmountString)
settextElementById("tax", taxAmount)
 
const totalAmount = subtotal + taxAmount;
settextElementById("taxTotal",totalAmount); // tax total means subtotal + tax amount 

}

