function square(number) {
    console.log('value of the parameter is ', number);
    const result = number * number;
    console.log('the square of given number is ', result);

}
square(5);
square(10);

function add(num1, num2) {
    const sum = num1 + num2;
    console.log('the sum of given numbers is ', sum);
}

add(10, 20);
add(5, 15);


function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log('the sum of given number is : ',total);
}

addAll(4, 5, 6, 7, 8);