/* -----------------------------------notes-------------------------------------
1. in the Html world if the any thing starting with "<" .which we call element.
2. in the javascript world called text Node. in side the element.
3. createElement dose <></> 
*/

const courses = [
    {
        name: "Complete ReactJs courses",
        price: "2.3"
    },
    {
        name: "Complete Angularjs courses",
        price: "3.3"
    }, {
        name: "Complete MERN courses",
        price: "6.3"
    }, {
        name: "Complete c++ courses",
        price: "8.3"
    },
    {
        name: "Complete ruby courses",
        price: "1.1"
    }
]

function generateList() {

    const ul = document.querySelector(".list-group")
    ul.innerHTML = ""
    courses.forEach(course => {

        // Creating li Element
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        const name = document.createTextNode(course.name)
        li.appendChild(name)

        // Creating span Element
        const span = document.createElement("span")
        span.classList.add("float-right")
        const price = document.createTextNode("$" + course.price)
        span.appendChild(price);

        ul.appendChild(li);
        li.appendChild(span);
    })
}

window.addEventListener("load", generateList)


const button = document.querySelector(".sort-btn")
button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price)
    generateList();
});

