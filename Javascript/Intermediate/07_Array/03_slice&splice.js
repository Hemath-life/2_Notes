/* --------------------------------------------------notes------------------------------------------------
1. Start point(fist element) always inclusive and end point(last element) always exclusive.
    example:
      Inclusive - in array starting element are included to array count.
      Exclusive - in array end element ain't included to array count.
2. slice function is use for to slice array.
3. splice is use for remove particular place element and posting new element.and return delete elements.
     example: 
    "" slice  (starting point, ending element )
        splice(starting point, how many element , replace values)""
---------------------------------------------------------------------------------------------------------*/

// // example 1
// var user = ['Ted', 'Tim', 'Ton', 'Sam', 'Sor', 'Sor'];
// console.log(user.slice(0,5));


// // example 2
// var user = ['Ted', 'Tim', 'Ton', 'Sam', 'Sor', 'Sor'];
// console.log(user.slice(5)); // it 5'th position element  give.


// // example 3
// var user = ['Ted', 'Tim', 'Ton', 'Sam', 'Sor', 'Sor'];
// console.log(user.slice(user.length -1)); // it 5'th position element  give.


// // example 3
// var user = ['Ted', 'Tim', 'Ton', 'Sam', 'Sor', 'Sor'];
// console.log(user.splice(1, 3, "good"));
// console.log(user);


// example 4
var user = ['Ted', 'Tim', 'Ton', 'Sam', 'Sor', 'Sor'];
console.log(user.splice(1, 3, "good", "bad",'great','probably','alright'));
console.log(user);