function simpleNumber(number){
    if ((number < 2) || (number > 1000)) {
        return "данные неверны";
    } else {
        for (let i = 2; i < number; i++){
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

let randomNumber = Math.floor(Math.random() * 1500);
let x = simpleNumber(randomNumber);
console.log("Число " + randomNumber + ' простое - ' + x);