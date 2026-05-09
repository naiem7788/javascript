function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }

        let sum = 0;
        for (const number of odds) {
            sum += number;
        }
        const count = odds.length;
        console.log(odds, sum, count);
        const avg = sum / count;
        return avg;
    }
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const avg = oddAverage(numbers);
    console.log(avg);

