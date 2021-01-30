/*------------------------------------------------------------------------------------------
1. AJSX - sycranzes javascript XML.
    example:
       -search suggestion ,loading suggestions.
2. promise is Object which provided by the javascript.
3.  javascript pretty bad to reading a code .it read one line at a time.
4. Call stack inside add execution context and web stack.
5. While doing async code . call stack check if is async code then it's gonna send to web APIs 
    and the browser api keep tracks that code when time finished the api push to again 
    the  call stack to execute.
6. Callback is async function not but all time it depends on where you're using .
--------------------------------------------------------------------------------------------*/

// // 1. Sync code example.
// function otherFunct() {
//      console.log(`We are in another funct`)
//      console.log(`do some stuff`)}
// console.log(`Start`)
// otherFunct()
// console.log(`End`)

// // 2. asynce code example.
// console.log(`Start`)
// setTimeout(() => {
//      console.log('We are in the timeout')
// }, 100)
// console.log(`End`)

// // 3. Callback not anytime async function example.these is not a async function.
// const items = [1, 2, 4, 5, 4, 5, 7, 6, 7]
// items.forEach(a => {
//      console.log(a)
// })
