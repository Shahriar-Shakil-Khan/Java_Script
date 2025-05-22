const handLoad = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>showUser(data))
} 

const showUser = (users) =>{
   const userContainers=document.getElementById("users");
   for(const user of users){
    console.log(user);
    const li=document.createElement('li');
    li.innerText=user.email;
    userContainers.appendChild(li);
   }
}
