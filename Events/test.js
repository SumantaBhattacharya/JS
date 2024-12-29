// document.getElementById("owl").onclick = function(){
//     alert("owl clicked")
// }

// attachEvent()
// jQuery - on

//type timestamp, default prevented,target,toElement,currentTarget,Client,ClientY,screenX,screenY,altkey,ctrlKey,shiftKey,keyCode
// Event propagation 1. Bubbling - false 2. Capturing 
document.getElementById("images").addEventListener("click", function(e){
    console.log(e.target.parentNode);//event object
    e.stopPropagation();// e.preventDefault(); for disabling links
    // let remove it = e.target.parentNode
    // removeit.parentNode.removeChild(removeit);
    // or removeit.remove();
    // console.log(e.target.tagName)
    // if (e.target.tagname === "IMG"){
    //     e.target.parentNode.removeChild(e.target); or e.remove();
    // }
},false)// false is by default


