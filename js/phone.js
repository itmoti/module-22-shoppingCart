// phone number change kore

function updatePhoneNumber(IsIncrese){
    const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberFieldString= phoneNumberField.value;
    const previousInputNumber = parseInt(phoneNumberFieldString);
    let newNumber;
   if(IsIncrese ){
     newNumber = previousInputNumber + 1;
 
   }
   else {
     newNumber = previousInputNumber - 1;
  
   }
   phoneNumberField.value = newNumber;
  return newNumber;
}
    
// phone price change kore

function phonePriceUpdater(newPhoneNumber){
    const phonePrice =document.getElementById("phone-price");
    const newPhonePrice = newPhoneNumber * 1219;

    phonePrice.innerText= newPhonePrice;
}

 




//for case button press

document.getElementById("btn-phone-plus").addEventListener("click",function(){
    const newPhoneNumber = updatePhoneNumber(true);
    phonePriceUpdater(newPhoneNumber);
     
    subTotalCalculator();



     
  
  
})
 // for phone button press
document.getElementById("btn-phone-minus").addEventListener("click", function(){
    const newPhoneNumber = updatePhoneNumber(false);
    phonePriceUpdater(newPhoneNumber);
    console.log(phonePriceUpdater)
    subTotalCalculator();
})