const handLoader=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>showDisplay(data))
}

const showDisplay=(users)=>{
    const postContainer=document.getElementById("postContainer");
    for(const user of users){
      const div =document.createElement("div");
      div.innerHTML=`
      <h1>${user.title}</h1>
      <p>${user.body}</p>
      <button>Details</button>
      `;
    postContainer.appendChild(div);
    }
}



