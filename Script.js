// this function is genarating random number 

function generatePin() {
  const pinNumber = Math.round(Math.random() * 10000);
  const pin = pinNumber + '';
  if (pin.length == 4) {
    return pinNumber;
  }

  else {
    return generatePin()
  }
}

// showing the the random pin in the input tag

document.getElementById("click-btn").addEventListener("click", function () {
  const pin = generatePin();
  document.getElementById("input-value").value = pin;
});

// number key action added and appending the number

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const keyPadInput = document.getElementById("num-input");

  if (isNaN(number)) {
    if (number == "C") {
      keyPadInput.value = "";
    }
  }

  else {
    const firstInput = keyPadInput.value;
    const newInput = firstInput + number;
    keyPadInput.value = newInput;
  }
})

// matching the pin 

function verifyPin() {
  const checkPin = document.getElementById("input-value").value;
  const keyPadInput = document.getElementById("num-input").value;

  if (checkPin == keyPadInput) {
    document.getElementById("notify-tick").style.display = "block";
  }

  else {
    document.getElementById("notify-cross").style.display = "block"
  }
}

// delete element one after another 
document.getElementById("delete-btn").addEventListener("click", function () {
  const numInput = document.getElementById("num-input").value;
  document.getElementById("num-input").value = numInput.slice(0, numInput.length - 1);
})