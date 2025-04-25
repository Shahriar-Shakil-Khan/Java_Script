const x = 'shakil'

console.log(x.toUpperCase())

const y = 'NABIL'

console.log(y.toLowerCase())


// const subject = 'Chemistry'
// const book = 'chemistry'

// if(subject.toLowerCase()==book.toLowerCase()){
//     console.log("Read the book");
// }else{
//     console.log("Don't read the book");
// }

const subject = 'Chemistry'
const book = 'Chemistry '

if(subject.trim()==book.trim()){
    console.log("Read the book");
}else{
    console.log("Don't read the book");
}