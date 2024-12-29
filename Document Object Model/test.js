const parent = document.querySelector(".parent")
console.log(parent);
console.log(parent.children);// html collection returns
console.log(parent.children[1]);
console.log(parent.children[1].innerHTML);// returns tuesday

for (let i = 0; i < parent.children.length; i++) {
    const element = (parent.children[i].innerHTML)
    console.log(element);
}

parent.children[1].style.color = "orange"
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const day1 = document.querySelector('.day')
console.log(day1);
console.log(day1.nextElementSibling);


const dayElements = document.querySelectorAll('.day');
const day2 = dayElements[1];
console.log(day2);
console.log(day2.nextElementSibling);

console.log("NODES:", parent.childNodes);

const div = document.createElement('div')
console.log(div);
div.className = "main"
div.id = "myId"// Math.random(Math.random() * 10 + 1)
div.setAttribute("title","Chai aur Code")
console.log(div.getAttribute('title'));
div.style.backgroundColor = "green"
div.style.padding = "5px"
//div.innerText = "Chai aur code"
const add_text = document.createTextNode("Chai aur code")
div.appendChild(add_text)
document.body.appendChild(div)

function addLanguage(langName){
    const li = document.createElement("li")
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)

}
addLanguage("HTML")
addLanguage("CSS")

function addOptiLanguage(language){// more efficient
    const li = document.createElement("li")
    // const add_text=document.createTextNode(language)
    // li.appendChild(add_text) //document.body.appendChild(li) is already created in the html part
    li.appendChild(document.createTextNode(language))
    document.querySelector('.language').appendChild(li)
}
addOptiLanguage("Java");

// edit
const SecondLang = document.querySelector("li:nth-child(2)");
//SecondLang.innerHTML = "golang";
const newli = document.createElement("li");
newli.textContent = "golang";// it is more optimised.innerText
SecondLang.replaceWith(newli)
// const a_t = document.createTextNode("golang");
// newli.appendChild(a_t);
// document.querySelector('.language').appendChild(newli)//to add to the last

const first_language = document.querySelector("li:nth-child(1)")
// first_language.innerHTML = "javascript";
first_language.outerHTML = "<li>TypeScript</li>"
// const newlist = document.createElement("li");
// newli.innerHTML = "javascript"
// first_language.replaceWith(newlist);

// remove 
const last_language = document.querySelector("li:last-child")
last_language.remove()

// innerText instead of textContent in your code. Both properties are used to set or get the text content of an element
// The primary difference between innerText and textContent is how they handle styles and script tags. innerText considers the styles and doesn't include the content of hidden elements or script tags. On the other hand, textContent returns the full text, including the content of hidden elements and script tags. Since you are dealing with replacing content in a list item, both innerText and textContent are likely to work in your case. 

// para.classlist.add("newclass")
// para.classlist.remove("newclass")

//Events in JS
// The chnage in the state of an object is known as an Event
// Events are fired to notify code of "Interesting changes" that may affect code execution
// Mouse events (click,double click etc.)
// keyboard events (submit,etc)
// print events and many more

// no python 