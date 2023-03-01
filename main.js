// Declarations
const bill1 = document.getElementById("first-bill");
const bill2 = document.getElementById("second-bill");
const bill3 = document.getElementById("third-bill");
const btn = document.getElementById("btn");
//
// Function
btn.addEventListener("click", () => {
  if (btn.value === "ON") {
    btn.value = "OFF";
    bill1.textContent = "$19.99";
    bill2.textContent = "$24.99";
    bill3.textContent = "$39.99";
  } else if (btn.value == "OFF") {
    btn.value = "ON";
    bill1.textContent = "$199.99";
    bill2.textContent = "$249.99";
    bill3.textContent = "$399.99";
  }
});
