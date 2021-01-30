/* -------------notes --------------------
1. maps are not object

*/
// cnstractional kinda approch while useing new 
var myMap = new Map()


myMap.set(0, "Hemath")
myMap.set(1, "Hemath")
myMap.set(2, "Hemath")

for (let key of myMap.keys()) { console.log(key); }
for (let value of myMap.values()) { console.log(value); }
for (let [key, value] of myMap) { console.log(value + "" + key); }

// console.log(myMap);

myMap.delete(1)
console.log(myMap);