function dataValidations(inputItens) {
  const convertStringForNumberMonth = Number(inputItens[2].value);
  const convertStringForNumberYear = Number(inputItens[3].value);
  const infosCardDefault = document.querySelectorAll(".info-card");
  const infosCard = [
    infosCardDefault[1],
    infosCardDefault[0],
    infosCardDefault[2],
    infosCardDefault[3],
    infosCardDefault[4],
  ];
  const messageError = document.querySelectorAll(".alert-error");
  const maxLengthInputs = [33, 19, 2, 2, 3];
  inputItens.forEach((input, i) => {
    if (input.value === "") {
      if (!input.classList.contains("error")) {
        input.classList.add("error");
        messageError[i].classList.remove("hidden");
        messageError[i].innerText = "Campo Vazio!";
      }
    } else if (input.value.length < maxLengthInputs[i] && i > 0) {
      if (!input.classList.contains("error")) {
        input.classList.add("error");
        messageError[i].classList.remove("hidden");
        messageError[i].innerText = "Caracteres Faltando!";
      } else {
        messageError[i].innerText = "Caracteres Faltando!";
      }
    } else if (
      (i === 2 &&
        (convertStringForNumberMonth === 0 ||
          convertStringForNumberMonth > 12)) ||
      (i === 3 && convertStringForNumberYear === 0)
    ) {
      if (!input.classList.contains("error")) {
        input.classList.add("error");
        messageError[i].classList.remove("hidden");
        messageError[i].innerText = `Campo Inválido!`;
      } else {
        messageError[i].innerText = `Campo Inválido!`;
      }
    } else {
      input.classList.remove("error");
      messageError[i].classList.add("hidden");
      infosCard[i].innerText = input.value;
    }
  });
}

export { dataValidations };
