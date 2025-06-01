const numbers=[1,2,3,4,5];
console.log(numbers);
console.log(...numbers);


const newNumber=[...numbers,6,7,8,9,10];
console.log(newNumber);



friends=["shakil","nabil","sami","mona","simu"]

for(let index=0; index<friends.length; index++){
     const element=friends[index];
     console.log(element)
}