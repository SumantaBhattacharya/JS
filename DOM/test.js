console.log("Hi,Sumanta here!");
console.log(window);
window.console.log("Hi");
//window.alert("Hi,scroll down to look more!");
// what is DOM(Document Object Model)-When a web page is loaded, the browser creates a Document Object Model of the page.
// HTML --> JS(document(window)).

// DOM Manupulation

/*Selecting with Id
document.getElementById("myID")*/ 

/*Selecting with class
document.getElementsByClassNmae("myClass") */

/*Selecting with tag
document.getElementByTagName("p")*/

//window
// window.document // loads all the html file

// DOM Manupulation
// Query Selector
// document.querySelector("myID / myClass / tag")
// returns first element
// document.querySelectorAll("myId / myClass / tag")
// returns a Nodelist

console.log(window.document)
console.log(document)
console.log(document.body)
console.dir(document.body)
console.dir(document.body.childNodes)
console.dir(document.body.childNodes[3])
console.dir(window.document)
console.log(document.head)
console.dir(document.head)

//console
//document.body.style.background = "green";
//window
//document.body.children.innerText = "abcd";
let heading = document.getElementById("title");
console.log(heading);
console.dir(heading);

let headings = document.getElementsByClassName("heading")
console.log(headings);
console.dir(headings);

let parahs = document.getElementsByTagName("p")
console.dir(parahs);

let First_elements=document.querySelector("p")
console.dir(First_elements);
// console 
// First_elements.tagName
let all_elements=document.querySelector("p")
console.dir(all_elements);//multiple access

let Felements = document.querySelectorAll(".heading");
console.dir(Felements);
console.log(Felements);

let a_elements = document.querySelectorAll(".heading");
console.dir(a_elements);
console.log(a_elements);

// DOM Manupulation 
//Properties
// tagName: returns tag for elements nodes
// innerText: returns the test content of the element and all its children
//innerHTML: returns the plain test or HTML contents in the element
// textContent: returns textual content even for hidden elements
console.dir(document.body.firstChild);
let div = document.querySelector("div")
console.log(div);
//https://media.geeksforgeeks.org/wp-content/uploads/DOM.png
// "C:/Users/Sumanta Bhattacharya/OneDrive/Documents/Desktop/JS/DOM/test.js"
// DOM tree
// text node
// comment node
// elements node
// div.innerText = "abcd"

// let divs = document.querySelectorAll("div")
// let idx = 1;
// for(div of divs){
//     div.innerText = `new unique id ${idx}`
//     idx++; 
// }//-->
// div[0].innerText = "new unique id 1"
// div[1].innerText = "new unique id 2"
// div[2].innerText = "new unique id 3"

console.log(document.documentElement);
console.log(document.body);
console.log(document.head);
console.log(document.body.childNodes);
const body = (document.body.children);
console.log(body);// html collection
console.log(document.body.children.length);
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

for (const iterator of body) {// instead of body we can also write document.body.children
    console.log(iterator);// childnodes and children are sam
}

const childrensofbody = Array.from(document.body.children)
console.log(childrensofbody);// html collection coverted to array

// siblings
console.log(document.body.children[0]);
console.log(document.body.children[0].nextSibling);
const ultag = document.body.children[1];
console.log(ultag);
console.log(document.body.children[1].nextSibling);
console.log(ultag.nextElementSibling);// it gives the next element after ul tag that will be script for now
console.log(ultag.previousElementSibling);// it gives the previous element before ul tag that will be span for now
console.log(document.body.children[2]);

const first_li = ultag.children[0]//document.body.children[1].children
console.log(first_li);
const second_li = ultag.children[1]
console.log(second_li);
console.log(second_li.nextElementSibling.textContent);
const third_li = ultag.children[2]
console.log(third_li);//document.body.children[1].children this format will not give the espected part
console.log(third_li.previousElementSibling.textContent);

// table dom manupulation
const tabletag = (document.body.children[2]);
console.log(tabletag);
const first_tr = tabletag.children[0]
console.log(first_tr);
console.log(first_tr.textContent)
console.log(tabletag.tBodies);//it giving us html collection
console.log(tabletag.tBodies[0])
console.log(tabletag.tBodies[0].rows);//same
console.log(tabletag.rows);// same2
const HtmlC = Array.from(tabletag.tBodies[0].rows)
console.log(HtmlC);
//to access inside tr i.e td
const tbodies = tabletag.tBodies[0].rows[0].cells[0]
console.log(tbodies);
console.log(document.body.children[2].tBodies[0].rows[0].cells[0].style.backgroundColor = "orangered");
console.log(document.body.children[2].tBodies[0].rows[0].cells[1]);
console.log(tabletag.tBodies[0].rows[1].cells[0])
console.log(tabletag.tBodies[0].rows[1].cells[0].style ="background-color:blue")
console.log(document.body.children[2].tBodies[0].rows[1].cells[1])
console.log(document.body.children[2].tBodies[0].rows[1].cells[1].style.color = "red")

//element.style.backgroundColor = "orange"
// const ul_tag = document.body.children[1]
const ul_tag = document.getElementById("element")
console.log(ul_tag.style.backgroundColor = "orange");//-c -camel case, the first letther of the dfirst compounded word has to be in lowercase /C i.e pascal case, the first letter of the first compound word has to be in uppercase

f_element.style.backgroundColor = "pink"
console.log();

const fi_element = document.body.children[1]
fi_element.children[1].style.backgroundColor = "purple"
console.log(fi_element);

// const fir_element = document.querySelectorAll("ul > li:nth-child(0)")//ul > li:last-child
// console.log(fir_element.style.backgroundColor = "green");
/* It seems there's a mistake in your code. The querySelectorAll method returns a NodeList,
 and when you try to access the style property directly on the NodeList, it will not work.
  You need to iterate over the NodeList or select a specific element from it. */
  const firstElement = document.querySelector("ul > li:last-child");
  if (firstElement) {
      firstElement.style.backgroundColor = "green";
  }
  console.log(firstElement);
  

const list_item = document.getElementsByClassName("list-item");
console.log(list_item);

const tagul = document.getElementsByTagName("ul");
console.log(tagul);

const listitems = document.querySelector("#element")
console.log(listitems);

const listitems_ = document.querySelectorAll("ul > li:last-child")
console.log(listitems_);
console.log(listitems_[0].textContent);

const li_item = document.querySelectorAll("ul > li:nth-child(3)")
console.log(li_item);

const li_items = document.querySelectorAll("ul > li")
console.log(li_items);

// get element by id and querySelector
// query Selector is static,it passes the data
// get element by id are not static, they change on run time, it passes the reference 
//https://github.com/badges/shields?tab=readme-ov-file
// https://stackblitz.com/edit/dom-project-chaiaurcode?file=2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Fstyle.css
// https://codesandbox.io/dashboard/recent
// gpt genarative pretrained 

//Attributes
console.log(element.id);
console.log(element.data);//userdefined attribute are not accessed directly
console.log(element.getAttribute("data"));// then we have to put this method in use i.e getAttribute method
console.log(element.setAttribute("order-placed", 'pending'))
console.log(element.getAttribute("order-placed"));// then we have to put this method in use i.e getAttribute method
console.log(element.hasAttribute("order-placed"));// to check whether the attribute is exist on that element or not
console.log(element.hasAttribute("data"));
console.log(element.removeAttribute("order-placed"));
console.log(element.hasAttribute("order-placed"));// to check whether the attribute is exist on that element or not
console.log(element.attributes);

// creating a element,removing and updating the node elements
// the create element method will not add the element to the dom structure
const newDiv = document.createElement("div");
const newText = document.createTextNode('Namaste World')
//document.body.append(newDiv);// the prepend here add the value to the end of the body 
document.body.after(newDiv);// to add the elements in the last of the elements section and after the body in the display section
//document.body.prepend(newDiv);// the prepend here add the value to the start of the body but prepand in the element body not add the new div upper of the body to set the new div to upper of the body in the elements, we use before 
//document.body.before(newDiv);// the the div is upper of the body 
newDiv.appendChild(newText)// we can replace the line number 222 and 227 with this line newDiv.innerHTML = <ul></ul> or newDiv.textContent = "sumanta is our hero" this also work

// function addOptiLanguage(language){// more efficient
//     const li = document.createElement("li")
//     // const add_text=document.createTextNode(language)
//     // li.appendChild(add_text) //document.body.appendChild(li) is already created in the html part
//     li.appendChild(document.createTextNode(language))
//     document.querySelector('.language').appendChild(li)
// }
// addOptiLanguage("Java");

function addOpt(element_1) {
    const li = document.createElement("li");
    const add_text = document.createTextNode(element_1);// the append here add the value to the end of the body 
    document.body.append(li); // You may want to append to a specific container instead of directly to body.it can be also append child
    li.appendChild(add_text);// 

    li.setAttribute("order", "someValue"); // Set a custom attribute "order"
    console.log(li.getAttribute("order"));// the order is the attribute and somevalue is the value like this order = "somevalue"
    console.log(li.hasAttribute("order"));
}
addOpt("java"); // Pass the string "java" as an argument

firstDiv.replaceWith(newDiv)
//firstDiv.remove()

// clickBtn.onclick = function callme() {
//     alert("Thanks for viewing this page");
// };
function callme() {
    alert("Thanks for viewing this page");
}

document.addEventListener("DOMContentLoaded", function() {
    const clickBtn = document.getElementById("clickBtn");

    if (clickBtn) {
        clickBtn.onclick = callme;// if we add callme() instead of callme the whenever thepage will refered we will not the message without evene clcikiung it
    } else {// it is pass not call
        console.error("Element with ID 'clickBtn' not found");
    }
});

// in camel case the first letter becomes capital

// Event listener
var a = document.querySelector(".p")
a.innerHTML = "Kaaise ho ap log"
a.style.color = "yellow"
a.style.backgroundColor = "black"
a.addEventListener("click",function(){
    console.log("hey");
})// it is a higher order function,here event is predefined
