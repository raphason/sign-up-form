var budgetSlider = document.getElementById("budgetSlider")
var budgetText = document.getElementById("budget_text")

budgetText.innerHTML = "$" + budgetSlider.value;

budgetSlider.oninput = function() {
    budgetText.innerHTML = "$" + this.value;
} 

