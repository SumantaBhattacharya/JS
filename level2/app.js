// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true,
// });

var arr = [
  {
    songName: "Animal",
    url: "./song/Animal.mp3",
    imageUrl: "./images/Ani.jpg",
  },
  {
    songName: "Lover",
    url: "./song/lover.mp3",
    imageUrl: "./images/diljit.jpg",
  },
  {
    songName: "Mere banogi kya",
    url: "./song/mere banagi kya.mp3",
    imageUrl: "./images/mere.jpg",
  },
  {
    songName: "Please dont go",
    url: "./song/hmmmm.mp3",
    imageUrl: "./images/image.png",
  },
  {
    songName: "Barfi",
    url: "./song/barfi.mp3",
    imageUrl: "./images/barf.jpg",
  },
];

var poster = document.querySelector(".left");

var audio = new Audio();

var selectedSong = 0;

// var clutter = "";
// arr.forEach(function (e, i) {
//     clutter += `
//         <div class="song-card" id=${i}>
//             <div class="part1">
//                 <img src="${e.imageUrl}" alt="${e.songName}">
//                 <h2>${e.songName}</h2>
//             </div>
//             <h6>4:10</h6>
//         </div>`;
// });

// document.querySelector(".all-songs").innerHTML = clutter;

function mainFunction() {
  var clutter = "";
  arr.forEach(function (e, i) {
    clutter += `
        <div class="song-card" id=${i}>
            <div class="part1">                                              
                <img src="${e.imageUrl}" alt="${e.songName}">
                <h2>${e.songName}</h2>
            </div>
            <h6>4:10</h6>
        </div>`;
  });
  poster.style.backgroundImage = `url("${arr[selectedSong].imageUrl}")`;
  audio.src = arr[selectedSong].url;
  document.querySelector(".all-songs").innerHTML = clutter;
}

mainFunction();

document.querySelector(".all-songs").addEventListener("click", function (dets) {
  // audio.src = arr[dets.target.id].url;
  // audio.play();

  selectedSong = dets.target.id;
  mainFunction();
  audio.play();
  play.innerHTML = '<i class="ri-pause-line"></i>';
  flag = 1
});
// pointer-events: none;

/* <div class="song-card">
                    <div class="part1">                                              
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAJQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABQQGBwMBAv/EADMQAAIBAwMCAwYEBwEAAAAAAAECAwQREgAFITFBBhMiFFFhcYGxkaHR8BUjJCVCcuEH/8QAGQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUA/8QAIhEBAAIBAwQDAQAAAAAAAAAAAQACEQMSIRMxQfAyUaEE/9oADAMBAAIRAxEAPwCfT7tnUQyw1ASZQVKc4829RF+Tx+Z1Qf8A1DfK7eN4ipp6d0o6QusRsf5rG2R/L6afVlVReH5oPalknqZbtLgL2Hew+Gl+4bttEp8qsiM1LUnzqZlbLGQGzYni1x245HOlXW8hGz+dfMzwgq6jyxyOA1+fjppB4c3BqmGCdBGGA9a+uykX5t04vqJui+z1bxJA6c+kOLseov8AjxrTfC8Na8VKlbTw0q2DrgDeQYgXb4jpa3HPv0VtbhO0DWteRlq8IeGIKLbkWmqpkh8tVVHtyQWJb5nLn5DRq37bTxrTjG4v/ie2jUNyUxMD8cbm0+6QSB8QkbBRIth3vY25vb7ar1bTzNsqTxxztAsgZXZCVubX56dfuNXPcFXcaCilGEawZMpADMxPvuLfTnUuSnSj8ISy0AAqBIiw+biBmzXv0557G40tTWKla+cx+1Hle0h7FtiblSUlVuFG7S0vFOjIVEmRyyPdhcgDsLc9dNd7qZaKb2dLCPPOwBtjxkASLXsSv0Gq1t9LW0dSu4tUNU17kpUrK11CsD1J7g49+2uVVuW5VO5RQypKkxYqqvbi3Pvtbi9/gOuiIpgYI2718TYPAG6fxDaWjNpDTFY8gS3GIIBJtyP017pR4UmTYqB6SmRTGXzL5C7tYAk/gNeaSdSw8Tr6ebKTK9jri0SUNUzI3HlFh1BF/tq0RVBq4GpFmK0wC5uRbp20q3Lfttl2+LZqeOZTGsflTYrkJ7tdj7hi1r/AcaY1XjlWrkqE28Hy672pjEoPnJiyKLBrZAMOQSDYHi3JL6d7OSuPe8Max8UzOFa+20SPTU06pWOpKmwutgWyNvlrjt5nq85CDJOrWZ2Fx+/10y2LdZFgpIKzZjUNT0ns/nSIhbqWYj1G5Noxc9Ap99tQaXcoqfbqagSmlimpljymIS7yerLvcriRb/XpqXcCBz7+SlXLnEsEEsFPTRo6jIjI3uedGl1RvMLyNPR0ksnmuWbzLR291rE3/wCDRoHTu84jG6v1MwdFFQytUBQLESAHr+/tpyzrni9VSmyDJST9enfRo1sYzMtcM+6SWKkP9NPCuVyMpbg/QKPvrnPUny5f7hCTldwoJaw+mjRquwzLdSxOI3dkgWTNWyYrhf1LYDk/A34+R0aNGp2VhOvef//Z" alt="">
                        <h2>Phale bhe main</h2></div>
                        <h6>4:10</h6>
                </div>
                
                <div class="song-card">
                    <div class="part1">                                              
                        <img src="https://a10.gaanacdn.com/gn_img/albums/z8k3y13rxo/k3ydngLJKr/size_l_1629086662.webp" alt="">
                        <h2>Lover</h2></div>
                        <h6>3:22</h6>
                </div>
                
                <div class="song-card">
                    <div class="part1">                                              
                        <img src="https://i.ytimg.com/vi/uoLC9u_M-E8/maxresdefault.jpg" alt="">
                        <h2>Mere banoge kya</h2></div>
                        <h6>3:32</h6>
                </div>
                
                <div class="song-card">
                    <div class="part1">                                              
                        <img src="https://i.ytimg.com/vi/S2oxFIsENgM/maxresdefault.jpg" alt="">
                        <h2>Please dont go</h2></div>
                        <h6>3:28</h6>
                </div>
                <div class="song-card">
                    <div class="part1">                                              
                        <img src="https://a10.gaanacdn.com/gn_img/albums/D0PKLrWGl9/0PKL1Aq3Gl/size_m.webp" alt="">
                        <h2>barfi</h2></div>
                        <h6>4:26</h6>
                </div> */

var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

var flag = 0;
play.addEventListener("click", function () {
    if(flag == 0){
        play.innerHTML = '<i class="ri-pause-line"></i>';
        flag=1;
        mainFunction();
        audio.play();
    }else{
        play.innerHTML = '<i class="ri-play-line"></i>';
        mainFunction();
        audio.pause();
        flag=0;
    }
  
});


forward.addEventListener("click", function(e){
  // selectedSong++; // Increment the selectedSong index
  // if (selectedSong >= arr.length) {
  //     selectedSong = 0; // Reset to the first song if reached the end
  // }
  // mainFunction();
  // audio.play();
  if(selectedSong < arr.length -1){
    selectedSong++;
    mainFunction();
    audio.play();
    forward.style.opacity = 1;
  }else{
    forward.style.opacity = 0.43;
  }
});

backward.addEventListener("click", function(e){
  if(selectedSong > 0){ // Check if there are previous songs
    selectedSong--;
    mainFunction();
    audio.play();
    backward.style.opacity = 1;
  } else {
    backward.style.opacity = 0.43; // Reduce opacity if there are no previous songs
  }
});
