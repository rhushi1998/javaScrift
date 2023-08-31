
# Tip-Calculator

This is a simple HTML and JavaScript code that allows the user to Calculate Tip .

# HOSTTED LINK:
https://rhushi1998.github.io/javaScript/homework11/

## Step 1: Create the HTML file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="container">
        <div id="form_container">
          <h1>Rhushikesh' Tip Calculator</h1>
              <form id="form">
                  <label>
                      How much was your bill?<br>
                      Rs. <input type="text" id="Amount"><br>
                  </label>
                  <label>
                      How was your service?<br>
                      <select id="Squality">
                          <option disabled="" selected="" value="0">-- Choose an option --</option>
                          <option value="0.3">30% - Outstanding</option>
                          <option value="0.2">20% - Good</option>
                          <option value="0.15">15% - It was okay</option>
                          <option value="0.1">10% - Bad</option>
                          <option value="0.05">5%  - Terrible</option>
                      </select>
                  </label>
                  <label>
                      How many people are sharing the bill?<br>
                      <input type="text" id="totalPeople"> people
                  </label>
                    <button type="button" id="calcbtn"> Calculate!</button>
              </form>
            </div>
      </div>
      <script src="index.js"></script>
</body>
</html>


## Step 2: Create the JavaScript file

The JavaScript file is responsible for getting the keyword from the user and then displaying it on the screen.

```javascript
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
   

```

## Step 3: Run the code

To run the code, open the HTML file in a web browser.

## Conclusion

This is a simple example of how User can calculate Tip according to service. This code can be used as a starting point for more complex projects.


