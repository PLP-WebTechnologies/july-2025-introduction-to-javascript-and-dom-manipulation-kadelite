// ======= Part 1: Variable Declarations and Conditionals =======

let username = "Ade";
let isLoggedIn = true;

if (isLoggedIn) {
  console.log(`Welcome, ${username}!`);
} else {
  console.log("Please log in to continue.");
}

// ======= Part 2: Custom Functions =======

// Function 1: Greet user
function greetUser(name) {
  return `Hello, ${name}! Hope you're having a great day!`;
}

// Function 2: Generate a list of items
function generateList(items) {
  const list = document.getElementById("itemList");
  list.innerHTML = ""; // Clear previous items

  for (let item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }
}

// ======= Part 3: Loops Examples =======

// Loop 1: For loop - count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}

// Loop 2: While loop - log first 3 even numbers
let num = 2;
let count = 0;
while (count < 3) {
  console.log(`Even number: ${num}`);
  num += 2;
  count++;
}

// ======= Part 4: DOM Interactions =======

// DOM Interaction 1: Change heading text on load
document.getElementById("main-heading").textContent = "JavaScript DOM & Logic Demo";

// DOM Interaction 2: Event listener on greet button
document.getElementById("greetBtn").addEventListener("click", () => {
  alert(greetUser(username));
});

// DOM Interaction 3: Event listener to generate a list
document.getElementById("listBtn").addEventListener("click", () => {
  const items = ["Learn JavaScript", "Practice Coding", "Build Projects"];
  generateList(items);
});
