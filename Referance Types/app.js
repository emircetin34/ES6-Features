// String Primitive Veri Tipidir
let a = "Mustafa";
let b = "Mustafa";

if (a===b) {
    console.log("a=b Eşit");
}





// Array Referans Veri Tipidir.
let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];

if(array1 === array2){
    console.log("Eşit");
}
else{
    console.log("Eşit DEĞİL");
}





// Obje Referans Veri Tipidir.
const person1 = {
    name: "Mustafa",
    age:25
}

const person2 = {
    name: "Mustafa",
    age:25
}

if(person1 === person2){
    console.log("P1=P2 Eşittir");
}
else {
    console.log("P1 != P2 EŞİT DEĞİLDİR");
}





// Map Ref
const cities = new Map();
cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set([1,2,3],"Array");
console.log(cities.get([1,2,3]));  //undefined döndürür.



const cities2 = new Map();
const key = [1,2,3];
cities2.set("Ankara",5);
cities2.set("İstanbul",15);
cities2.set(key,"Array");
console.log(cities2.get(key));  // Array getirir. Yukarıda tanımladık.