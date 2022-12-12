// Spread Operator

const langs = ["Python", "C++","Java","Php"];
// console.log(langs [0], langs [1], langs[2], langs [3]);
console.log(...langs);  //Yukarıdaki ile aynı işlevi görür. Tekrardan kurtarır.

// const langs2 = ["Javascript" , "C#", langs [0], langs [1], langs[2], langs [3]];
const langs2 = ["Javascript", "C#", ...langs];
console.log(langs2);





// Bunu daha önce destructingde görmüştük. a=1 b=2 oldu
// Kalan 7 değeride bir değişkene atamak için spread metodunu kullanırız.
// const numbers = [1,2,3,4,5,6,7,8,9];
// const [a,b] = numbers;

const numbers = [1,2,3,4,5,6,7,8,9];
const [a,b,...number2] = numbers;
console.log(a,b,number2);



// Fonk içinde (Yaygın Kullanım !)
// Eski Yöntem
const numbers2 = [100,200,300];
const addNumber = (a,b,c) => console.log(a+b+c);
addNumber(numbers2[0],numbers2[1],numbers2[2]); // Burada Eski yöntemi uyguladık.

// Yeni Yöntem - Spread
const numbers3 = [100,200,300];
const addNumber2 = (a,b,c) => console.log(a+b+c);
addNumber2(...numbers3);