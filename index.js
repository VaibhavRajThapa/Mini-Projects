const colors = document.querySelectorAll(".button");
const body = document.querySelector("body")

colors.forEach((color)=>{
    color.addEventListener("click", (event)=>{
        if(event.id === "sky"){
            body.style.backgroundColor = "#0ea5e9";
        }else if(event.id === "fuchsia"){
            body.style.backgroundColor = "#c026d3";
        }else if(event.id === "slate"){
            body.style.backgroundColor = "#475569";
        }else{
            body.style.backgroundColor = "#f43f5e";
        }
    })
})