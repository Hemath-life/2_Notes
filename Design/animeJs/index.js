// anime({
//           targets: '.box',
//           translateX: 150
// });



var elements = document.querySelectorAll('.box');
anime({
          targets: elements,
          translateX: 250,
          scale: .5,
          rotate: '1turn',
          duration: 2000
});




// window.addEventListener("scroll", hel)
// function hel() {
//           anime({
//                     targets: elements,
//                     opacity: 0
//           });
// }