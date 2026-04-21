//break --> I am done with the loop, I want to exit the loop immediately

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i >= 5) {
        break;
    }
}
console.log("Loop ended");

let n = 54;
while (n > 25) {
    console.log(n);
    if (n < 50) {
        break;
    }
    n--;
}
console.log("While loop ended");