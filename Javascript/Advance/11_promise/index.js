function uno() {
          return ("I am One");
}


function dos() {
          return ("I am Two");
}


function tres() {
          return new Promise((resolve, reject) =>
                    setTimeout(() => {
                              resolve("I got that")
                    }, 3000)
          )
}

const callMe = (async () => {
          const one = uno()
          console.log(one);

          const two = dos()
          console.log(two);

          const three = await tres()
          console.log(three);
})()

