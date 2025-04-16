var elem = document.querySelectorAll(".elem");
// var elemImage = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove", function(dets){
//     elemImage.style.left = dets.pageX + "px"
//     elemImage.style.top = dets.pageY + "px"
// });

// elem1.addEventListener("mouseenter", function(dets) {
//     elemImage.style.opacity = 1;
// });

// elem1.addEventListener("mouseleave", function(dets) {
//     elemImage.style.opacity = 0;
// });
// node js and express js
// frontend 
// react js, angular js,vue js
// sass css preprocesor 
//jest for unit testing
// cypress end to end testing
// typescript is an alternative for javascript


elem.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
        val.children[1].style.opacity = "1";
    });

    val.addEventListener("mouseleave", function () {
        val.children[1].style.opacity = "0";
    });
    val.addEventListener("mousemove", function (dets) {
        val.children[1].style.left = dets.pageX+"px"
        val.children[1].style.top = dets.pageY+"px"
    });
});

/*

Alternative rounds
2 player will alternatively play the rounds

    0 |1 |2
    ------
     3| 4|5
    ------
     6|7 |8

    to win- Horizontal

    - |- |-
    ------
     -| -|-
    ------
     -| -|-

     -|- |-
    ------
      |  | 0,1,2
    ------
      |  |

       |  |
      ------ 3,4,5
      -|- |-
      ------
       |  |


       |  |
      ------
       |  |
      ------
      -| - |- 6.7.8

      -|   |
      ------
      -|   | 0,3,6
      ------
      -|   |

      |  - |
      ------ 1,4,7
      |  - |
      ------
      |  - | 

      |   |-
      ------
      |   |- 2,5,8
      ------
      |   |-

      |  |- 2,4,6
    ------
      | - |
    ------
     - |  |

     -|   | 
     ------  0,4,8
      | - |
     ------
      |   |-
    

    -|  |-
    ------
     | -|
    ------
    -|  |-

    number of possible outcome
    0,1,2
    3,4,5
    6,7,8
    0,3,6
    1,4,7
    2,5,8
    0,4,8
    2,4,6
    if any one of the possible outcomes met then the player will win

*/