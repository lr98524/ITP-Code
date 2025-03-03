const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validNumberPattern =
  /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

function validatePhoneNumber(number) {
  if (validNumberPattern.test(number)) {
    if (number.startsWith("1") || !number.startsWith("1 ")) {
      return `Valid US number: ${number}`;
    } else {
      return `Invalid US number: ${number}`;
    }
  }
  return `Invalid US number: ${number}`;
}

checkBtn.addEventListener("click", () => {
  const inputValue = userInput.value.trim();

  if (inputValue === "") {
    alert("Please provide a phone number");
    return;
  }

  const result = validatePhoneNumber(inputValue);
  resultsDiv.textContent = result;
});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultsDiv.textContent = "";
});
