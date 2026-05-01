function sumOfNumbers(numbers) {
    let sum = 0;
    for ( const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const myNumbers = [1, 2, 3, 4, 5];
const total = sumOfNumbers(myNumbers);
console.log('Total:', total);

function getEvenNumbers(numbers) {
    const evenNumbers = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}
const evenNums = getEvenNumbers(myNumbers);
console.log('Even Numbers:', evenNums);
    