function sumOfNumber(numbers){
    console.log(numbers)
    let sum=0;
    for(const number of numbers){
        sum=sum+number;
    }
    return sum
    
}

const numbs=[1,2,3,4,5];
const x =sumOfNumber(numbs);
console.log(x);
