var Is_status = document.querySelector("h5")
var add_Friend = document.querySelector(".add")
var remove_Friend = document.querySelector(".remove")
var check = 0
add_Friend.addEventListener("click",function(e){
    if (check == 0){
    Is_status.innerHTML = "Friend"
    Is_status.style.color = "green"
    check = 1
    }else{
        console.log("already added" );
        check = 0
    }
})

remove_Friend.addEventListener("click",function(e){
    Is_status.innerHTML = "Stranger"
    Is_status.style.color = "red"
    console.log("Not Friend anymore ):");
})


