const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault()

    const weight = parseInt(document.querySelector("#weight").value)
    const height = parseInt(document.querySelector("#height").value)
    const result = document.querySelector("#result")

    let flag = true;

    if(height ==="" || height <= 0 || isNaN(height)){
        result.innerText = "Please give a valid height";
        flag = false;
    }
    if(weight ==="" || weight <= 0 || isNaN(weight)){
        result.innerText = "Please give a valid weight";
        flag = false;
    }

    if(flag === true){
        const bmi = (weight/((height**2)/10000)).toFixed(2)
        result.innerText = `Your BMI is ${bmi}`;
        if(bmi > 24.9 || bmi < 18.6){
            result.style.color = "#B91C1C"
        }else{
            result.style.color = "#16A34A"
        }
        
    }
})