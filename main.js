
let todo = "";
// variable to store the text from the todo field

const todoField = document.querySelector("#addItem");
// grabbing the input field from the html

const sectionTag = document.querySelector("ol");
// grabbing the empty ol

const todoList = []
// an array to store all of the todos as they're pushed into the array


document.querySelector('form').addEventListener("submit", function(event) {
    // grab the form and add a submit event listener to it, and pass a callback function that has an event parameter
    event.preventDefault();
    // stops the page from refreshing
    todo = todoField.value;
    // assigning the value of the todoField to the todo variable
    console.log(todo);
    // check that the todo variable has a value
    todoList.push(todo);
    // pushes the todo into the array
    
    
    
    
    const template = todoList.map(todo => `
        <li> ${todo} </li>
    `);
 

    // builds an array of li elements, and puts the text of each todo inside the li.
    console.log(template);
    // log the array of li elements
    sectionTag.innerHTML = template.join('');
    
    // take the template array, join it into a single string, and put it in the html of the empty ol
})


function check() {
    document.getElementById("myCheck").checked = true;
    
}

