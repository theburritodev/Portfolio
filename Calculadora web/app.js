const numkeys = document.querySelectorAll(".numPad");
for (var i = 0; i < numkeys.length; i++) {
    let key = numkeys[i];
    
  key.addEventListener("click",(e)=>{
    document.getElementById("display").textContent += key.innerText;
  });
}
