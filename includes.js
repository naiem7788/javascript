const friends = ['Ross', 'Rachel', 'Monica', 'Chandler', 'Joey', 'Phoebe'];

console.log(friends.includes('Monica'));
console.log(friends.includes('Gunther'));

if (friends.includes('Gunther')) {
    console.log('Gunther is a friend');
}
else {
    console.log('Gunther is not a friend');
}