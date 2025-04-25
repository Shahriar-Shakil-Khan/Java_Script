const salary = 250001;
const isBCS = false;
const height=61;
const hasCar=true;
/*
if (salary>20000 && height>66){
    console.log("Qualified")
}
else{
    console.log("Not Qualified")
}

if(salary>25000 || height>60){
    console.log("Qualified")
}
else{
    console.log("Not Qualified")
}*/

// Complex condition

if((salary>25000 || hasCar==true) && isBCS == true){
    console.log("Qualified")
}
else{
    console.log("Not Qualified")
}