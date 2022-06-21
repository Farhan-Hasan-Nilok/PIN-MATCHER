function generatePin(){
    const pinNumber = Math.round(Math.random()*10000);
    const pin = pinNumber + '';
    if (pin.length == 4){
    return pinNumber;
    }

    else{
      return generatePin()
    }
}

document.getElementById("click-btn").addEventListener("click", function(){
    const pin = generatePin();
    document.getElementById("input-value").value = pin;
});

document.getElementById("key-pad").addEventListener("click", function(event){
    const number = event.target.innerText;
    const keyPadInput = document.getElementById("num-input");

    if(isNaN(number)){
      if (number == "C") {
        keyPadInput.value = "";
      }
    }

    else{
      const firstInput = keyPadInput.value;
      const newInput = firstInput + number;
      keyPadInput.value = newInput;
    }
})

function verifyPin(){
  const checkPin = document.getElementById("input-value").value;
  const keyPadInput = document.getElementById("num-input").value;

  if(checkPin == keyPadInput){
    document.getElementById("notify-tick").style.display = "block";
  }

  else{
    document.getElementById("notify-cross").style.display = "block"
  }
}