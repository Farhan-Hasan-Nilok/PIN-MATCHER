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
})