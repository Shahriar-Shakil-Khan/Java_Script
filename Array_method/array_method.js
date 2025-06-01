const products=[
    {name:"Redmi",brand:"xiaomi",price:3000,color:"black"},
    {name:"Samsung",brand:"Samsung",price:5000,color:"white"},
    {name:"Apple1",brand:"Apple",price:5000,color:"gold"},
    {name:"Apple2",brand:"Apple",price:5000,color:"black"},
    {name:"Redmi2",brand:"xiaomi",price:2000,color:"black"},
]

const result = products.map(product=>product.price);
console.log(result)

products.forEach(product=>console.log(product.price))

const result1 =products.filter(product=>product.price>=5000)
console.log(result1)