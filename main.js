document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    let currentOperation = "";
    let isResultDisplayed = false;

    function addToDisplay(value) {
        if (isResultDisplayed && "1234567890".includes(value)) {
            display.textContent = "";
            isResultDisplayed = false;
        }
        if (value === "AC") {
            display.textContent = "";
            currentOperation = "";
        } else if (value === "C") {
            display.textContent = display.textContent.slice(0, -1);
            currentOperation = currentOperation.slice(0, -1);
        } else if (value === "=") {
            try {
                const result = eval(currentOperation);
                display.textContent = result;
                currentOperation = result.toString();
                isResultDisplayed = true;
            } catch (error) {
                display.textContent = "Error";
            }
        } else {
            display.textContent += value;
            currentOperation += value;
        }
    }

    const buttons = document.querySelectorAll(".calculator .row div");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            addToDisplay(button.textContent.trim());
        });
    });
});

document.querySelectorAll(".row div").forEach((el) => {
    el.addEventListener("click", function () {
        this.classList.add("click");
        setTimeout(() => {
            this.classList.remove("click");
        }, 100);
    });
});