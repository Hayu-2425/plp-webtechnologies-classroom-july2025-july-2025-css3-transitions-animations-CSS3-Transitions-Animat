/* PART 2: JavaScript Functions and Scope */

// Reusable function with parameters and return value
function calculateSquareArea(sideLength) {
  return sideLength * sideLength;
}

console.log("Area of square with side 4:", calculateSquareArea(4)); // 16

// Demonstrating scope
let globalCounter = 0;

function incrementCounter() {
  let localCounter = 0;
  globalCounter++;
  localCounter++;
  console.log(`Global: ${globalCounter}, Local: ${localCounter}`);
}

incrementCounter(); // Global: 1, Local: 1
incrementCounter(); // Global: 2, Local: 1

/* PART 3: Combining JS & CSS */

// Trigger slide animation on box
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("animatedBox");
  box.classList.remove("slide"); // reset if already animated
  void box.offsetWidth; // reflow trick to restart animation
  box.classList.add("slide");
});

// Card flip on click
document.getElementById("flipCard").addEventListener("click", () => {
  const card = document.getElementById("flipCard");
  card.classList.toggle("flip");
});

// Toggle popup visibility
function togglePopup() {
  const popup = document.getElementById("popup");
  popup.classList.toggle("hidden");
}
