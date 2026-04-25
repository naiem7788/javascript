function doubleIt (number) {
    const double = number * 2;
    console.log(number, double);
}
console.log('I will call the function');
doubleIt(5);
doubleIt(10);
doubleIt(100);  

const money = 5000;
doubleIt(money);

function difference(num1, num2) {
    const diff = num1 - num2;
    console.log(num1, num2, 'the difference is : ', diff);
}

const fatherAge = 50;
const sonAge = 20;
difference(fatherAge, sonAge);
difference(sonAge, fatherAge);