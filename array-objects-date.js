// Lists, array or arrangement
// array = Is a set of variables

const list = [1, "hi", true, undefined, null];
const list2 = new Array(2, "bye", false, undefined, null);
const list3 = new Array(3);
list3[0] = "I'm the first element, index 0";
const list4 = [list, list2, list3];


console.log(list);
console.log(list2);
console.log(list3);
console.log(list4);

// Objects

const mobile = {
    height: 10, // --> Attributes
    width: 5,
    brand: "Samsung",
    isWhite: true,
    contacts: ["Alan", "Brian", "Lury"],
    card: {
        brand: "Sandisk",
        storage: 32
    },
    "height-card": 7
}
mobile.year = 2022;
mobile.brand = "iPhone"

console.log(mobile.contacts);
console.log(mobile.year);

// Dates
// Frameworks: Moment.js
// Different ways of used dates:

const now = new Date();

console.log(now);

const date_mil = new Date(10); // Using the milliseconds
console.log(date_mil);

const date_array = new Date("march 25 2022");
console.log(date_array);

const date_value = new Date(2023, 2, 15);
console.log(date_value);

const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear()

console.log(day, month, year);