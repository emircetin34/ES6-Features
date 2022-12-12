// Normal Function
// const merhaba = function(){
//     console.log("Merhaba");

// }
// merhaba();


// Arrow Function
const merhaba = () => {
    console.log("Merhaba");
}
merhaba();


// Arrow Function PARAMETRE
const merhaba2 = (firstName,lastName) => {
    console.log("Merhaba",firstName,lastName);
}
merhaba2("Emir"), //2.parametreyi girmediğimiz için Merhaba Emir UNDEFINED dondurur.
merhaba2("Emir","ÇETİN");


// Arrow Function TEK SATIR
const merhaba3 = (firstName) => console.log("Merhaba",firstName);
merhaba3("Emir");


// Normal Function (Return)
const cube = function(x) {
    return x*x*x;
}
console.log(cube(4));


// Arrow Function (Return) Eğer tek satır ise return yazmaya gerek yok !!!
const cube2 = x => x*x*x;
console.log(cube2(2));


const square = y => y*y;
console.log(square(6));

