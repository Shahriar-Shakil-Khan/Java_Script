const heights=[49,65,10,55,500,150,360,600,558];
console.log(heights);

function getMax(numbers){
    let max=numbers[0];
    for(const num of numbers){
        if(num>max){
            max=num;
        }
    }
    return max;
}

const max=getMax(heights);
console.log(max)