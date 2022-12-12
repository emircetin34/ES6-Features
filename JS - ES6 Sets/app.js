// SETS - KÜMELER
// Bir değeri sadece bir defa taşır.
const myset = new Set();
myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("Mustafa");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2})
console.log(myset);


// Yatay şekildede set oluşturabiliriz.
// const myset2 = new Set([100,3.14,"Mustafa"]);
// console.log(myset2);



//Size
console.log(myset.size); 


//Delete 
myset.delete("Mustafa");
console.log(myset);


// Has Metodu
console.log(myset.has("Mustafa")); //Yukarda sildiğimiz için False getirdi
console.log(myset.has(3.14)); //true 
console.log(myset.has(2000));  //false
console.log(myset.add([1,2,3])); //false gelir çünkü referans tipi tutar.
console.log(myset.add({a:1,b:2})); // false gelir ref tipinden dolayı.


// For Each
myset.forEach(function(value){
    console.log(value);
})


// For Of
for (let value of myset){
    console.log(value);
}


// ARRAY TO SET
const array = Array.from(myset);
console.log(array);
