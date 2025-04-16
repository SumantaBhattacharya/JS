document.addEventListener("DOMContentLoaded", function() {
    let con = document.querySelector(".container");
    let love = document.querySelector(".ri-heart-3-fill");

    con.addEventListener("dblclick", function(e){
        love.style.transform = "translate(-50%, -50%) scale(1)";
        //love.style.opasity = 0.8
        /*setTimeout(function(){
            love.style.opasity = 0;
        },1000)//time in milliseconds */
        setTimeout(function(){
            love.style.transform = "translate(-50%, -50%) scale(0)";
        },1000)//time in milliseconds
        
    });
});
