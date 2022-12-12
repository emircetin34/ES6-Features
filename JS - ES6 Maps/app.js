// Maps -  Key(Anahtar) - Value(Değer)

let myMap = new Map(); // Oluşturma
console.log(typeof myMap);
console.log(myMap);

const key1 = "Emir";
const key2 = {a:10,b:20};
const key3 = () => 2;


// SET - myMap'e keyleri aktarma
myMap.set(key1,"String Değer");
myMap.set(key2,"Object Değer");
myMap.set(key3,"Function Değer");


// GET
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));


// Map Boyutu
console.log(myMap.size);



const cities = new Map();
cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

// For Each
cities.forEach(function(value,key){
    console.log(key,value);
})

// For OF
for (let value of cities){
    console.log(value);
}
// Yukarıdakinin çıktısı  (Array olarak döndürür)
// ['Ankara', 5]
// ['İstanbul', 15]
// ['İzmir', 4]


//Buranın cıktısı string olarak döndürür.
for (let [key,value] of cities){ //destructing
    console.log(key,value);
}


// Map Keys
for (let key of cities.keys()){
    console.log(key);
}


// Map Values
for (let value of cities.values()){
    console.log(value);
}


// Arrayden Map oluşturma
const array = [["key1","value1"],["key2","value2"]];
const lastMap = new Map(array);
console.log(lastMap)


// Maptan Array oluşturma
const cities2 = new Map();
cities2.set("Ankara",5);
cities2.set("İstanbul",15);
cities2.set("İzmir",4);
// [["Ankara",5] ,["İstanbul","15"],["İzmir","5"]]
const array2 = Array.from(cities2);
console.log(array2);