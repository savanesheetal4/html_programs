const Person={
    name:"Sheetal Savane",
    age:20,
    email:"savanesheetal2@gmail.com"
}

console.log(Person.name+" "+Person.age+" "+Person.email);
//Adding object destructure
const{name,age,email}=Person;
console.log(age);
console.log(name);
console.log(email);

