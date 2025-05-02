function electionResult(votes) {

    if (!Array.isArray(votes)) {
        return "Invalid";
    }
    
    let mango = 0;
    let banana = 0;
    
    for (let vote of votes) {

        if (vote === 'mango'){
            mango++;
        } 
        else{
            banana++;
        } 
        
    }    
    if (mango > banana){
        return "Mango"
    } 
    else if (banana > mango){
        return "Banana"
    }else{
        return "Draw"
    }
    
}
fruits=["mango", "banana", "mango","banana", "mango"]
const answer=electionResult(fruits)
console.log(answer);