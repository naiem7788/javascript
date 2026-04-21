//odd numbers

for (let i = 0; i < 20; i++) {

    if (i % 2 === 1) {
        console.log(i);
    }
}
//Give the list numbers between 1 and 30 divisible by 5
for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

//Give the list numbers between 1 and 30 divisible by 3 or 5
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 || i % 5 === 0) {      
        console.log(i);
    }
}

//Give the list numbers between 1 and 30 divisible by 3 and 5
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

//Give the sum of numbers between 1 and 100 divisible by 3
let total = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        total += i;
    }
}
console.log(total);