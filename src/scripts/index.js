import {maskValidationNumberCard,maskValidationCardholderName,maskValidationMMYY,maskValidationCCV} from "../scripts/validations/masks-validation.js";
import {dataValidations} from "./validations/data-validations.js";
import {completeState} from "./services/complete-state.js";
const inputItens = document.querySelectorAll(".form-itens");
inputItens.forEach((input,i) =>{
  input.addEventListener('input',() =>{
    if(i === 0){
      maskValidationCardholderName(input)
    }else if(i === 1){
      maskValidationNumberCard(input)
    }else if(i === 2 || i === 3){
      maskValidationMMYY(input)
    }else{
      maskValidationCCV(input)
    }
  })
})
const confirmButton = document.querySelector("#btn-confirm");

    confirmButton.addEventListener("click", () => {
      dataValidations(inputItens)
      completeState(inputItens)
});
