const phones=[
    {name:'samsung',price:50000,camera:'36mp',color:'black'},
    {name:'nokia',price:30000,camera:'16mp',color:'gray'},
    {name:'iphone',price:150000,camera:'64mp',color:'black'},
    {name:'realme',price:22999,camera:'12mp',color:'gold'},
    {name:'xamio',price:100000,camera:'14mp',color:'white'},
]


function getMax(obj){
    let max=obj[0];
    for(const phone of obj){
        if(phone.price>max.price){
           max= phone;
        }
    }
    return max;
}

const answer=getMax(phones);
console.log('biggest price :',answer);