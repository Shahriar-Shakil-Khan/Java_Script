function oddAverage(numbers){
    //  console.log(numbers)
    const odds =[];
    for(const number of numbers){
        if(number % 2 ===1){
            // console.log(number);
            odds.push(number);
        }
    }
    // console.log(odds)
    let sum=0;
    for(const number of odds){
        sum=sum+number;
    }
    const count=odds.length;
    console.log(sum,count);
    const avg = sum/count;
    return avg;
}

const numbers=[51,49,40,12,10,3,77];
const avg=oddAverage(numbers);
console.log('Average of the odd number is : ',avg);
