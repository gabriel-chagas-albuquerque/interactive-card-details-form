function maskValidationNumberCard(inputItens) {
  inputItens[1].addEventListener("keydown", () => {
    const inputLength = inputItens[1].value.length;
    if (inputLength === 4 || inputLength === 9 || inputLength === 14) {
      inputItens[1].value += " ";
    }
  });
}

function charactersValidation(inputItens) {
  inputItens.forEach((input, i) => {
    input.addEventListener("keydown", (e) => {
      const char = String.fromCharCode(e.keyCode || e.which);
    
      const pattern = ["[0-9]", "[0-9]", "[0-9]", "[0-9]"];
      if (i === 0) {
        if (
          (e.keyCode >= 65 && e.keyCode <= 90) ||
          (e.which >= 65 && e.which <= 90) ||
          e.keyCode === 8 ||
          e.keyCode === 9 ||
          e.keyCode === 16 ||
          e.keyCode === 20 ||
          e.keyCode === 32 ||
          e.which === 8 ||
          e.which === 9 ||
          e.which === 16 ||
          e.which === 20 ||
          e.which === 32 
          ) 
        {
        } else {
          e.preventDefault();
        }
      } else {
        if (
          char.match(pattern[i-1]) ||
          e.keyCode === 8 ||
          e.keyCode === 9 ||
          e.keyCode === 16 ||
          e.keyCode === 20 ||
          e.which === 8 ||
          e.which === 9 ||
          e.which === 16 ||
          e.which === 20 ||
          (e.keyCode >= 96 && e.keyCode <= 105) ||
          (e.which >= 96 && e.which <= 105)
        ) {
        } else {
          e.preventDefault();
        }
      }
    });
  });
}
export { maskValidationNumberCard, charactersValidation };
