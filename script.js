function calculateInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const tenure = parseFloat(document.getElementById("tenure").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const result = document.getElementById("result");

  if (isNaN(principal) || isNaN(tenure) || isNaN(rate)) {
    result.innerText = "❌ Please enter valid numbers in all fields.";
    result.style.color = "#e74c3c";
    return;
  }

  const interest = (principal * tenure * rate) / 100;
  result.innerText = `Total Interest: ₹${interest.toFixed(2)}`;
  result.style.color = "#2ecc71";
}

// Dark Mode Toggle
document.getElementById("modeToggle").addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

