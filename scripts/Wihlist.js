import { BaseURL } from "./BaseUrl.js";

// to display wishlisted function
getwishitem();

async function  getwishitem() {
    try{
        let res = await fetch(`${BaseURL}/Wishlist`);
        let data = await res.json();
        return (data)
    } catch( err){
        console.log(err)
        alert("Something wnt wrong in dipskaying wishkist ietmm")
    }
   
}

function DisplayWislist(arr){
    let cont = document.getElementById("wish-cont");
    cont.innerHTML ="";

    arr.map((el, i) => {

        let card= document.createElement("div")
        card.setAttribute("class", "Wish-card")

        let Title =document.createElement("h4");
        Title.textContent = el.Title;
    
        let Deadline = document.createElement("h5")
        Deadline.textContent = el.Deadline;
    
        let Status = document.createElement("h5")
        Status.textContent = el.Status

        card.append( Title, Deadline, Status)
        cont.append(card)
    })
  
}
window.onload =async () => {
    let arr = await getwishitem();
    DisplayWislist(arr);
}
