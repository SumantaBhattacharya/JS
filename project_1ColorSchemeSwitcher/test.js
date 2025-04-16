const buttons = document.querySelectorAll(".button");
//console.log(buttons);
const body = document.querySelector("body");
//nodelist not html collection
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e){
    console.log(e);
    console.log(e.target)
    // if (e.target.id === 'grey'){
    //     body.style.backgroundColor = e.target.id//or 'grey';
    // }else if (e.target.id === 'blue'){
    //     body.style.backgroundColor = e.target.id//or 'blue';
    // }else if (e.target.id === 'yellow'){
    //     body.style.backgroundColor = e.target.id//or 'yellow';
    // }else if (e.target.id === 'white'){
    //     body.style.backgroundColor = e.target.id//or 'green';
    // }else if (e.target.id === 'pink'){
    //     body.style.backgroundColor = e.target.id//or 'green';
    // }

    switch(e.target){
        case buttons[0]:
            body.style.backgroundColor = 'grey';
            break;
        case buttons[1]:
            body.style.backgroundColor = 'blue';
            break;
        case buttons[2]:
            body.style.backgroundColor = 'yellow';
            break;
        case buttons[3]:
            body.style.backgroundColor = 'white';
            break;
        case pink:
            body.style.backgroundColor = 'pink';
            break;
        default:
            body.style.backgroundColor = 'grey';
    }

  })
});
