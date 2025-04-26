const x ="Md Shahriar";
        /*012345678910*/
const part= x.slice(1,7);
console.log(part) ;       

const sentence="I am a good and hardworking person";
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('a'));  // here a is deleted from strings;



const friend = 'Shakil,Nabil,Sami,Mona,Mehedi';
console.log(friend.split(','));


const friends=['shakil','shahriar','nabil','jakaria','mona'];
console.log(friends.join());
console.log(friends.join('|'));
console.log(friends.join('-'));


const a='shakil'
const b='nabil'

const c=a.concat(' ').concat(b);
console.log(c);

        