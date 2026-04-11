const books = ["The Great Gatsby", "To Kill a Mockingbird","Eloquent JavaScript", "Pride and Prejudice"];
console.log(books);

console.log(books.includes("Eloquent JavaScript"));

if (books.includes("Eloquent JavaScript")){
    console.log("Eloquent JavaScript is in the list of books.");
} else {
    console.log("Eloquent JavaScript is not in the list of books.");
}