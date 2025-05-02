function cashOut(money){
    if(money<0 || typeof money!=="number")
    {
        return "Invalid"
    }
    else
    {
        return  (money*0.0175).toFixed(4)
    }
}

const Answer = cashOut(100);
console.log("Cash Out charge is = ",Answer);