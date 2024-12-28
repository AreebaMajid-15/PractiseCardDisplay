import { BaseURL } from "./BaseUrl.js";

// to add card in  backend
let form = document.getElementById("form");
form.addEventListener("submit", function () {
  event.preventDefault();

  let Title = form.text.value;
  let Deadline = form.date.value;
  let CardObj = { Title, Deadline };

  // push card in backend

  fetch(`${BaseURL}/CardUser`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(CardObj),
  })
    .then(() => {
      alert("Card Added");
    })
    .catch((err) => {
      alert("something went wrong in added card");
      console.log(err);
    });
});

// to display Card
getcard();
async function getcard() {
  try {
    /// card added
    let res = await fetch(`${BaseURL}/CardUser`);
    let data = await res.json();
    return data;
  } catch (err) {
    // not added
    console.log(err);
    alert("something  went wrong in displaying card");
  }
}

// to add in wishlisht backend
function Addwishfun(wishobj){
  console.log(wishobj)
  console.log("worjk")
  fetch(`${BaseURL}/Wishlist`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body:JSON.stringify(wishobj),
  })
    .then(() => {
      alert("Card Added in wishist");
    })
    .catch((err) => {
      alert("something went wrong in adding card to wish");
      console.log(err);
    });
}
 

function displaycard(arr) {
  let cont = document.getElementById("Cont-Cart");
  cont.innerHTML = " ";

  arr.map((el, i) => {
    let card = document.createElement("div");
    card.setAttribute("class", "Dis-Card");

    let Title = document.createElement("h4");
    Title.textContent = ` Title: ${el.Title}`;

    let Deadline = document.createElement("h5");
    Deadline.textContent = `Deadline: ${el.Deadline}`;

    let Status = document.createElement("h5");
    Status.textContent = 
      el.Status == true ? "Status- Complete" : "stauts- Pending";
    console.log(el.Status);

    let UpdateStatusBtn = document.createElement("button");
    UpdateStatusBtn.textContent = "Change Status";

    UpdateStatusBtn.addEventListener("click", function () {
      updateStatusfun(el, i);
    });

    let wishBtn = document.createElement("button")
    wishBtn.textContent = "Add to wishlist";

    wishBtn.addEventListener("click", function() {
    //   let wishobj = ( ` ${Title} , ${Deadline}, ${Status}, ${UpdateStatusBtn}, ${wishBtn}`)
      Addwishfun(el)

    })

    card.append(Title, Deadline, Status, UpdateStatusBtn, wishBtn);
    cont.append(card);
    
  });
}
window.onload = async () => {
  let arr = await getcard();
  displaycard(arr);
};

// to change status
function updateStatusfun(el, i) {
  console.log("before", el);
  let updatecard = { ...el, Status: !el.Status };
  console.log("after", el);

  let UserCardID = el.id;
  fetch(`${BaseURL}/CardUser/${UserCardID}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updatecard),
  })
    .then(() => {
      alert("Card status cahnges");
      window.location.reload();
    })
    .catch((err) => {
      alert("something wnet wrong in chnging card stauts");
    });
}
