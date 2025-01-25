const clock = document.querySelector("#time");

let date = new Date();

setInterval(()=>{
    let date = new Date();
    clock.innerText = date.toLocaleTimeString();
}, 1000);