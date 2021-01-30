/* ------------------------ [ notes ] ---------------------------------
1. Event loop which looks for a event
*/

function uno() {
          console.log("I am One");
}


function dos() {
          console.log("I am Two");
}

 function tres() {
          setTimeout(() => {
                    console.log('Whoooohooo');

          }, 100)
          console.log("I am Three");
}


uno()
dos()
tres()