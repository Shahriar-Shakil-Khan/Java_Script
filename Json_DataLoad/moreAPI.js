const handLoadData1 = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
     .then(response=>response.json())
     .then(data=>{
        console.log(data);
        displayUser(data);
     })
}

const displayUser = (users) =>{
     console.log(users);
     console.log(users[0]);
}