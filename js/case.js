const caseInputField = document.getElementById("case-number-field");
const caseInputFieldString = caseInputField.value;
const previousInputNumber = parseInt(caseInputFieldString);
const newCaseNumber = previousInputNumber + 1;


function updateCaseNumber(isIncrease){
    const inputField = document.getElementById("case-number-field");
    const inputFieldString = inputField.value;
    const previousInputNumber = parseFloat(inputFieldString);
    let newNumber ;
    inputField.innerText= newNumber
    
    if(isIncrease === true) {
        newNumber = previousInputNumber + 1;
    }
    else {
        newNumber = previousInputNumber - 1;
    }

    caseInputField.value = newNumber;
    return newNumber;
}
  function updateTotalCaseNumber(caseNumber ,updateId){
    const totalCasePrice = caseNumber * 59;
    const caseTotalElement= document.getElementById(updateId);
    caseTotalElement.innerText = totalCasePrice;
  }

document.getElementById("btn-case-plus").addEventListener("click",function(){

       const caseNumber = updateCaseNumber(true);
       updateTotalCaseNumber(caseNumber , "case-price");
       subTotalCalculator()
                                                         
                      })

document.getElementById("btn-case-minus").addEventListener("click",function(){

   const newNumber= updateCaseNumber(false);
   const totalCasePrice  = newNumber * 59;
   const caseTotalElement = document.getElementById("case-price");
   caseTotalElement.innerText = totalCasePrice;
   subTotalCalculator();
})