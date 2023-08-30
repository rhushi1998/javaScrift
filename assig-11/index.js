document.addEventListener("keydown",(e)=>{
   

    const key_name = e.key;
    const key_number = e.keyCode;

    document.getElementById("key-name").innerText=key_name;
    document.getElementById("key-number").innerText=key_number;
})

