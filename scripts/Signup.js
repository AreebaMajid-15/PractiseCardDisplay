import { BaseURL } from "./BaseUrl.js";

let form = document.getElementById("from")
form.addEventListener("submit", function(){
   event.preventDefault()
   let name = form.Name.value;
   let email = form.Email.value;
   let password= form.Password.value;

   let userobj = { name, email, password}
   
   // to check existing user data 
   fetch(`${BaseURL}/CardUser`)
   .then((res)=> res.json())
   .then((data)=> {
    let user = data.filter((el,i)=> el.email==email)
    if(user.length>0){
        // user present 
        alert("User already there")
        window.location.href = "Login.html"
    }
    else {
        // user not present
        fetch(`${BaseURL}/CardUser`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(userobj)
        }).then(()=>{
            alert("Sign up done")
            window.location.href = "Login.html"
        })
    }
   }).catch((err)=>{
    console.log(err)
    alert("Some error in login")
   })
})