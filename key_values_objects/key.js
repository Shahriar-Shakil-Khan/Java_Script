const value={
    brand:'asus',
    price:'100000',
    ram:'16gb',
    collage:{
        x:'Amc',
        y:'Cpscm',
        color:{
           a:'blue',
           b:'red',
           c:'sky-blue'
        }
    }
}
const keys = Object.keys(value)
console.log(keys)

const values = Object.values(value)
console.log(values)
value.collage.color={
    v:"a",
}
console.log(value.collage.color)