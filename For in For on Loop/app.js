// FOR IN LOOP

const person = {
    name : "Emir ÇETİN",
    age : 24,
    salary : 5000
};

const langs = ["Python","Java","C++","PHP"];
const name = "Emir";

// Obje üzerinde gezinme işlemi
for (let prop in person){
    console.log(prop,person[prop]);
}

// Array
for (let index in langs){
    console.log(index,langs[index]);  
}

// String
for (let index in name){
    console.log(index,name[index]);
}



// FOR OF LOOP
// (Objelerde For Of Kullanılmaz!)
// Oject - ERROR
// for(let value of person){
//     console.log(value,person[value]); //Type Error : person is not iterable
// }

// Array
for (let value of langs){
    console.log(value);
}

for (let char of name){
    console.log(char);
}


