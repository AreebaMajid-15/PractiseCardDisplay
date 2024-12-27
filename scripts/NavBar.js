function nav (){
    let card = `<div id="NavBar">
          <h3 id="logo"> Card Diplay App</h3>
         <div id="Tags" >
            <a href="index.html">Home</a>
          <a href="SIgnup.html">SignUP</a>
          <a href="Login.html">Login</a>
          <a href="Card.html">Create Card</a>
         </div>
         </div>`

   let nav = document.getElementById("Nav")
   nav.innerHTML = card;
}

nav()