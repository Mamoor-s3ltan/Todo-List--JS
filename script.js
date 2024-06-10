let todo;
let to;
let tos = [];


todo = document.querySelector(".todo").firstElementChild;


const BTN = document.getElementById("BTN");

// Add event listener to the button
BTN.addEventListener("click", () => {
    // Prompt user for a new todo item
    to = prompt("Enter to do");

    if (to) {
        // Add the new item to the array
        tos.push(to);

        // Create a new list item element
        const newItem = document.createElement("li");
        newItem.innerHTML = `<p>${to}</p>`;
        todo.appendChild(newItem);

        newItem.addEventListener("click",()=>{
            if (newItem.style.textDecoration === "line-through") {
                newItem.style.textDecoration = "none";
            } else {
                newItem.style.textDecoration = "line-through";
            }
        })
    }
});



