const person = {
    name: "Chinni",
    age: 16,
    country: "USA"
};
console.log(person)
person.city= "Ananthapuram"
person.age = 15;
person.name="Kavya"
console.log(person);

person.age = 16
console.log(person)
delete person.age;
console.log(person)
const a={
name:"Baby",
age:20,
city:"Pulivendula"
}
console.log(a)

a.name="Heam"
a.age="21"
console.log(a)


const smartphone = {
    brand: "Realme",
    model: "Galaxy S21",
    price: 10000
};
console.log(smartphone)

delete smartphone.brand;
delete smartphone.model;
smartphone.model = null;
console.log(smartphone)


const book = {
    title: "Ramayana",
    author: "Valmiki Maharshi",
    pages: 1000
};
console.log(book)

book.B = "Mahabharata";
book.A = "Vyasa Maharshi"
console.log(book)

var data = [10, 20, ["apple", "banana"], ["cat", ["dog", "elephant"], "fish"], "grape"];

var items = [["pen", "pencil"], "notebook", [1, 2, [3, 4, ["eraser"]]], "marker"];

console.log(data.length)
console.log(data[3][2])
console.log(items.length)
console.log(items[2][2][2])