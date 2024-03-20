const infosCardDefault = document.querySelectorAll(".info-card");
    const infosCard = [
    infosCardDefault[1],
    infosCardDefault[0],
    infosCardDefault[2],
    infosCardDefault[3],
    infosCardDefault[4],
    ];
function maskValidationCardholderName(input){
    
    let cardInput = input.value;
    let formattedCard = cardInput.replace(/[^a-zA-Z\s]/g, "");  
    input.addEventListener('input', function() {
        if (this.value.length > 33) {
            this.value = this.value.slice(0, 33);
        }
    });
    formattedCard = formattedCard.substring(0,33);
    if(cardInput !== formattedCard){
        input.value = formattedCard;
    }
}

function maskValidationNumberCard(input){
    let cardInput = input.value
    let formattedCard = cardInput.replace(/[^\d]/g,"")
    input.addEventListener('input', function() {
        if (this.value.length > 19) {
            this.value = this.value.slice(0,16);
        }
    });
    
    formattedCard = formattedCard.substring(0,16)
    let cardSections = formattedCard.match(/\d{1,4}/g)
    if(cardSections !== null){
        formattedCard = cardSections.join(" ")
    }
    if(cardInput !== formattedCard){
        input.value = formattedCard
    }
}

function maskValidationMMYY(input){
    let cardInput = input.value
    let formattedCard = cardInput.replace(/[^\d]/g,"")
    input.addEventListener('input', function() {
        if (this.value.length > 2) {
            this.value = this.value.slice(0,2);
        }
    });
    
    formattedCard = formattedCard.substring(0,2)
    if(cardInput !== formattedCard){
        input.value = formattedCard
    }
}

function maskValidationCCV(input){
    let cardInput = input.value
    let formattedCard = cardInput.replace(/[^\d]/g,"")
    input.addEventListener('input', function() {
        if (this.value.length > 3) {
            this.value = this.value.slice(0,3);
        }
    });
    
    formattedCard = formattedCard.substring(0,3)
    if(cardInput !== formattedCard){
        input.value = formattedCard
    }
}
export{maskValidationCardholderName,maskValidationNumberCard,maskValidationMMYY,maskValidationCCV}