import {maskValidationNumberCard} from "../scripts/validations/masks-validation.js";
import {charactersValidation} from "../scripts/validations/masks-validation.js";
import {dataValidations} from "./validations/data-validations.js";
import {completeState} from "./services/complete-state.js";
const inputItens = document.querySelectorAll(".form-itens");
maskValidationNumberCard(inputItens)
charactersValidation(inputItens)
const confirmButton = document.querySelector("#btn-confirm");
    confirmButton.addEventListener("click", () => {
      dataValidations(inputItens)
      completeState(inputItens)
});
