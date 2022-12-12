// Normally
let number1, number2;
arr = [100,200,300,400];
number1 = arr[0];
number2 = arr[1];
console.log(number1,number2); //100 200


// Destructing
arr2 = [100,200,300,400];
const [xnumber1,xnumber2] = arr2;
console.log(xnumber1,xnumber2); // 100 200 
// Değişkenlerimizi array yapılarından kullanacaksak , destructing yapısından yararlanabiliriz.


// Obje Destructing
const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};
const {a,c,e} = numbers;
console.log(a,c,e);


// Obje Destructing -2
//const {a,c,e} = numbers; // a-c-e yi number1 number2 olarak isim değiştirmek istiyorsak
const numbers2 = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};
//const {a,c,e} = numbers; // a-c-e yi number1 number2 olarak isim değiştirmek istiyorsak
const {a:Ynumber1,c:Ynumber2,e:Ynumber3} = numbers2;
console.log(Ynumber1,Ynumber2,Ynumber3);


// Function Destructing 
const getLangs = () =>  ["Python","Java","C++"];
const [lang1,lang2,lang3] = getLangs();
console.log(lang1,lang2,lang3);



// Obje içi Fonksiyon
const person = {
    name : "Emir Çetin",
    year : 24,
    salary : 5000,
    showInfos : () => console.log("Bilgiler gösterildi.")
}

const {name:isim,year:yas,salary:maas,showInfos:bilgileriGoster} = person;
console.log(isim,yas,maas);
bilgileriGoster();