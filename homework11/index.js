let container = document.querySelector("#form_container");
let calculate = document.querySelector("#calcbtn");
let div = document.createElement("p");

calculate.addEventListener("click",()=>{
    div.innerText="";
    let amount = document.querySelector('#Amount').value;
    let totalPeople = document.getElementById("totalPeople").value;
  
    var service = document.getElementById("Squality").value;
    div.innerText = ` Tip Amount is ${amount*service/totalPeople}`
     console.log(div);
    container.appendChild(div);

})