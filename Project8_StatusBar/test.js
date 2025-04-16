var arr = [
    {
        dp: "https://i.pinimg.com/236x/22/93/ed/2293eddf8dd220cc2ec7cad9a53b3f32.jpg",
        story:"https://i.pinimg.com/236x/35/67/fa/3567facf875b1ad6bd4fd86d63b5c8b5.jpg"
    },
    {
        dp: "https://i.pinimg.com/236x/27/d0/e2/27d0e2b4b0f5b7c3d9dc677a05f75c49.jpg",
        story:"https://i.pinimg.com/236x/e6/79/ec/e679ec66294508a52cfb95efb24b3bd4.jpg"
    },
    {
        dp: "https://i.pinimg.com/236x/86/61/56/866156daa61fa69bef5ffd08dc0c561c.jpg",
        story:"https://i.pinimg.com/236x/d6/73/c9/d673c954014c15f0cced30b362432dd9.jpg"
    },
    {
        dp: "https://i.pinimg.com/236x/6a/b8/a4/6ab8a4662ee4b6fc66e60c9f3de8953a.jpg",
        story:"https://i.pinimg.com/474x/b9/0e/83/b90e83f67b062132fb395668659aee7b.jpg"
    },
    {
        dp: "https://i.pinimg.com/236x/24/30/4f/24304f8bd096b353b7b10df443d2a3ba.jpg",
        story:"https://i.pinimg.com/236x/b5/a2/3a/b5a23ab7a8027cf2d034768df804a8d4.jpg"
    },
    {
        dp: "https://i.pinimg.com/474x/d4/bb/e0/d4bbe051827162adaa2c56ad5aab51a0.jpg",
        story:"https://i.pinimg.com/236x/ab/3d/46/ab3d468092da31af5c0bd850e3527d27.jpg"
    },
    {
        dp: "https://i.pinimg.com/236x/39/2a/eb/392aeb7161207bb3c65524067187a453.jpg",
        story:"https://i.pinimg.com/236x/18/88/f5/1888f5920409ac189415772b05521de0.jpg"
    }

];
var clutter = ""
arr.forEach(function(elem,idx){
    clutter =  clutter + `<div class="story"><img id="${idx}" src="${elem.dp}" alt=""></div>`
})
document.querySelector(".storiyan").innerHTML = clutter

document.querySelector(".storiyan").addEventListener("click", function(dets) {
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    },3000)
});
