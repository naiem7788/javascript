const sentence = 'Hello, how are you doing today?';

let reverse = '';
for(const letter of sentence){
    reverse = letter + reverse;
}   
console.log(reverse);
