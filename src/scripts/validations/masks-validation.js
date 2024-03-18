function maskValidationNumberCard(inputItens){
    inputItens[1].addEventListener("keypress", () => {
    const inputLength = inputItens[1].value.length;
  if (inputLength === 4 || inputLength === 9 || inputLength === 14) {
    inputItens[1].value += " ";
  }
});
}

function charactersValidation(inputItens){
    inputItens.forEach((input, i) => {
        input.addEventListener("keypress", (e) => {
        const char = String.fromCharCode(e.keyCode || e.which);
        const pattern = ["[a-zA-Z ]","[0-9]", "[0-9]", "[0-9]", "[0-9]"];
        if (char.match(pattern[i])) {
        } else {
        e.preventDefault();
        }
    });
});
}
export {maskValidationNumberCard, charactersValidation}