const regex = /^[a-z0-9]+$/i;
const inputElement = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

function checkInput() {
  const input = inputElement.value;
  const value = input.toLowerCase();
  if (value == "") {
    alert("Please input a value");
    return;
  } else {
    if (checkPalindrome(value)) result.innerText = `${input} is a palindrome`;
    else result.innerText = `${input} is not a palindrome`;
  }
}

function checkPalindrome(value) {
  let i = 0,
    j = value.length - 1;
  while (i < j) {
    if (!regex.test(value[i])) {
      i++;
      continue;
    } else if (!regex.test(value[j])) {
      j--;
      continue;
    } else {
      if (value[i] !== value[j]) return false;
    }
    i++;
    j--;
  }
  return true;
}

inputElement.addEventListener("change", checkInput);
button.addEventListener("click", checkInput);
