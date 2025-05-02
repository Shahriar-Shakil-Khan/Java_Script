const phones=[
    {name:'samsung',price:500 ,quantity:2},
    {name:'nokia',price:300,quantity:3},
    {name:'iphone',price:1500,quantity:1}
]
/*
function getTotal(){
    let total=0;
    for(const phone of phones){
       total=total+phone.price; 
    }
    return total
}
*/

function getTotal(){
    let total=0;
    for(const phone of phones){
       const totalproduct= phone.price*phone.quantity;
       total=total+totalproduct
    }
    return total
}


const ans=getTotal(phones);
console.log(ans);

