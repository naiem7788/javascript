 const name = ['John', 'Jane', 'John', 'Doe', 'Jane'];
 const numbers = [1, 2, 3, 2, 4, 1];

 function noDuplicates(arr) {
        const unique = [];
        for (const item of arr) {
            if (!unique.includes(item)) {
                unique.push(item);
            }
        }
        return unique;
    }
    const uniqueNames = noDuplicates(name);
    const uniqueNumbers = noDuplicates(numbers);
    console.log(uniqueNames);
    console.log(uniqueNumbers);
    