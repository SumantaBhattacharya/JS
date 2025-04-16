const form = document.querySelector('form');
const body = document.querySelector('body');
body.style.backgroundColor = "#252525";
body.style.color = "#fff";
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e.target);

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === 0 || height < 0 || isNaN(height)){
        results.innerHTML = `Invalid height`;
    } else if(weight === 0 || weight < 0 || isNaN(weight)){
        results.innerHTML = `Invalid weight`;
    } else {
        const bmi = (weight/((height*height) / 10000)).toFixed(2);
        results.innerHTML = `<span>BMI: ${bmi}</span>`;//${bmi.toFixed(2)}
    }
});

const result = document.querySelector('#results');
// create a element 
const div = document.createElement('div');
div.className = "main";
div.id = "myId";
// div.appendChild(add_text)
// document.body.appendChild(div)
// check if the result > follows which condition and according to the condition print it besides the result 
// check if the result follows which condition and according to the condition print it besides the result 
if (resultValue < 18.6) {
    const add_text = document.createTextNode("Under Weight: " + resultValue);
    div.appendChild(add_text);
    document.body.appendChild(div)
    console.log(add_text);
} else if (resultValue > 24.9) {
    const add_text = document.createTextNode("Over Weight: " + resultValue);
    div.appendChild(add_text);
    document.body.appendChild(div)
    console.log(add_text);
} else {
    const add_text = document.createTextNode("Normal: " + resultValue);
    div.appendChild(add_text);
    document.body.appendChild(div)
    console.log(add_text);
}