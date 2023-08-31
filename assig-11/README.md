
# KeyPressed -js

This is a simple HTML and JavaScript code that allows the user to enter a keyword and then displays the keyword on the screen.


# Hosted link:
https://rhushi1998.github.io/javaScript/assig-11/

## Step 1: HTML Code
 <div id="app">
        <h2 >You Pressed <span id="key-name"></span></h2>
        <h3><span id="key-number"></span></h3>



## Step 2: CSS Code
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: white;
 
  }
#app{
    align-items: center;
}
h2{
    padding: 30px;
    background-color: white;
    font-size: xx-large;
}
h3{
    padding: 20px;
    background-color: white;
    font-weight: 100;
}
#key-name{
    color: rgb(3, 36, 29);
   
}
#key-number{
    color: rgb(3, 36, 29);
    font-size: xx-large;
}


## Step 3: JavaScript Code
document.addEventListener("keydown",(e)=>{
   

    const key_name = e.key;
    const key_number = e.keyCode;

    document.getElementById("key-name").innerText=key_name;
    document.getElementById("key-number").innerText=key_number;
})

## Conclusion

This is a simple example of how to create a simple web page that allows the user to enter a keyword and then displays the keyword on the screen.
