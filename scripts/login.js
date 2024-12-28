import { BaseURL } from "./BaseUrl.js";

//to fetch user from form 
let form = document.getElementById("Loginform")
 form.addEventListener("submit", function(){
    event.preventDefault()
    let email = form.email.value ;
    let password = form.password.value ;

    // to verify user
    fetch(`${BaseURL}/CardUser`)
    .then((res) => res.json())
    .then((data) => {
        let user = data.filter((el, i) => el.email== email);
       //user check 
        if (user.length > 0) {
             console.log("done")
            // check for passwrd
            if( user[0].password == password){
                alert("login succesful")
                localStorage.setItem("loginData" , JSON.stringify(user[0]))
                window.location.href = "Card.html"
            }else {
                // wrong pass
                alert("Passwrd wrong")
            }
        }
        //user not present
        else{
            alert("User does not exit")
            window.location.href = "Signup.html"
        }
    })
    .catch((err) =>{
        console.log(err)
        alert("something ent wrong , please try again")
    })
   
})