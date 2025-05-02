const name = ['Shakil','nabil','Mona','Simu','Sami','Mona','nabil'];
const numbers=[1,2,3,9,8,7,2,9,8];

function noDuplicate(array){
//    console.log(array);
    const unique = [];
    for(const item of array){
        if(unique.includes(item)===false){
            unique.push(item);
        }
    }
   return unique;
}3

const uniqueArray=noDuplicate(name);
console.log(uniqueArray);