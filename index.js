let count = 0;

// Select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".button-container button"); // Change the selector

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("button-decrease")) { // Update the class names
      count--;
    } else if (styles.contains("button-increase")) { // Update the class names
      count++;
    } else if (styles.contains("button-reset")) { // You can add a reset button
      count = 0;
    }
    if (count > 0) {
      value.classList.remove("red");
     
    }
    if (count < 0) {
      value.classList.remove("green");

    }
    if (count === 0) {
      value.classList.remove("yellow");
    }
    value.textContent = count;
  });
});
