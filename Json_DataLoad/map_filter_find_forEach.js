const products =[
    { id:1,name:'iphone',color:'black',price:1200,brand:'apple'},
    { id:2,name:'xiaomi',color:'gold',price:1000,brand:'xiaomi'},
    { id:3,name:'samsung',color:'gold',price:1200,brand:'sam'},
    { id:4,name:'iphone',color:'gold',price:500,brand:'apple'},
    { id:5,name:'xiaomi',color:'black',price:1200,brand:'xiaomi'}
];

/*
const newProduct=products.map(p=>{

      if(p.brand==='apple'){
        p.price=p.price+500;
      }
      
      return p;
})
console.log(newProduct);   */

/*
products.forEach(p=>console.log(p));
products.forEach(p=>{
    if(p.brand=='apple'){              // no return
       console.log(p) 
    }
})  */

/*

const singleProduct=products.find(p=>p.id===3);
console.log(singleProduct);  */

const newProduct2=products.filter(p=>p.name==='iphone');
console.log(newProduct2);