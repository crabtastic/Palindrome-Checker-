const input = document.getElementById("input");
const result = document.getElementById("result");

function reverseString(str) {
  
  return str.split("").reverse().join("").toLowerCase();

}

function check() {
  const value = input.value.trim();
  const reverse = reverseString(value);

  if (!value) {
    result.textContent = "Type something.."
    result.style.color = "gray"
    return
  }

  if (value.toLowerCase() === reverse) {
    result.textContent = "PALINDROME!"
    result.style.color = "green";
   

      confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 1 },
});
  
    
  } else {
    result.textContent = "Not Today! Try again.";
    result.style.color = "red";

  }

  input.value = "";
}

function enterButtonCheck(event) {
  if (event.key === "Enter") {
    check()
  };

};



