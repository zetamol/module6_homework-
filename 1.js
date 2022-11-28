let arr = [null, 'word', 1, 2, 3, 4, 5, 6, 7, true];


function countEvenOdd (arr){
    let countEven = 0;
    let countOdd = 0;
    let countOther = 0;

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            countOther++;
        } else {
            if (arr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }

    return [countEven, countOdd, countOther];
}

let result = countEvenOdd(arr);

console.log("Количество чётных " + result[0]);
console.log("Количество нечётных " + result[1]);
console.log("Количество остальных " + result[2]);