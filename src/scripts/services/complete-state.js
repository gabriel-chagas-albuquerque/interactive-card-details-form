function completeState(inputItens){
    let contadorErros = 0;
  inputItens.forEach((input, i) => {
    if (input.classList.contains("error")) {
      contadorErros++;
    }
  });
  if (contadorErros === 0) {
    document.querySelector(".form").innerHTML = `<div class="complete-state">
                                                        <img src="./src/images/icon-complete.svg" alt="Icon Complete" class="icon-complete">
                                                        <h2 class=thank-you>THANK YOU!</h2>
                                                        <p class=message>We've added your card details</p>
                                                        <button type="submit" id="btn-confirm"><h3>Continue</h3></button>
                                                     </div>`;
  }
}

export{completeState}