// Multi label condition

const price=6000

if(price>=10000){
    const discount=(price*10)/100;
    console.log("Discount = "+discount);
    const payAmount=price-discount;
    console.log("Your Payment = "+payAmount)
}
else if(price>5000){
    const discount=(price*5)/100;
    console.log(" 5 % Discount = "+discount);
    const payAmount=price-discount;
    console.log("Your Payment = "+payAmount)
}
else{
    console.log("Sorry no discount for you and payment is = "+price)
    console.log();
}