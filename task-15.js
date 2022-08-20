const ageDate = new Date(1994, 00 +9, 13, 20);
const bookDate = new Date(2012, 00 +1, 21);
const urlBook = 'https://www.amazon.com/-/es/Eric-Ries/dp/842340949X'
const myBook = {
    'title': 'Lean Startup',
    'author': 'Eric Ries',
    'date': bookDate
};

const myInfo = ["Alan", 27, true, ageDate, urlBook];

console.log(myInfo);
console.log(ageDate);
console.log(bookDate);
console.log(urlBook);