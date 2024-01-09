const form = document.querySelector('form')
// this usecase will give you empty value

// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')


    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please give a valid height";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please give a valid weight";
    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //result.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.6){
            result.innerHTML = `<span>Your BMI is ${bmi} and you are UNDER Weight </span>`
        }else if(bmi > 18.6 && bmi < 24.9){
            result.innerHTML = `<span>Your BMI is ${bmi} and you are Normal </span>`
        }else{
            if(bmi > 24.9){
                result.innerHTML = `<span>Your BMI is ${bmi} and you are Over Weight </span>`
            }
        }
    }
})