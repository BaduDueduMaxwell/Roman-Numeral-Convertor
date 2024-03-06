const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

function convertRoman(number) {
  const romanMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumeral = "";

  // sort the map in descending order by values
  for (const [symbol, value] of Object.entries(romanMap)) {
    while (number >= value) {
      romanNumeral += symbol;
      number -= value;
    }
  }

  return romanNumeral;
}

// Check user input
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt)) {
    result.textContent = "Please enter a valid Number";
  } else if (inputInt < 0) {
    result.textContent = "Please enter a number greater than or equal to 1";
  } else if (inputInt >= 4000) {
    result.textContent = "Please enter a number less than or equal to 3999";
  } else {
    result.textContent = convertRoman(inputInt);
  }
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkUserInput();
  }
});
