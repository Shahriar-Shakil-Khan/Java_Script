const person={
    name:'shakil',
    age:24,
    friends:['Rafi','fahad','Sohan'],
    status:true
}
console.log(person);
console.log(typeof(person));

const newPerson=JSON.stringify(person);
console.log(newPerson);
console.log(typeof(newPerson));

const newPerson2=JSON.parse(newPerson)
console.log(newPerson2);
console.log(typeof(newPerson2));

