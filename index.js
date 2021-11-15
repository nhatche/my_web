//document.getElementById("count-el").innerText = 5

let count=0

function increment(){
    console.log("clicked")
    document.getElementById("count-el").textContent = ++count
}

function reset(){
    count=0
    document.getElementById("count-el").textContent= count
}


function save(){
    saveNum=" "+count+" - "

    document.getElementById("count-save").textContent+=saveNum
}






