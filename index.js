let words = [
  "sun",
  "eight",
  "child",
  "galaxy",
  "battlefield",
  "game",
  "night",
  "day",
  "week",
  "solar",
  "moon",
  "eclipse",
  "abyss",
  "run",
  "down",
  "upstairs",
];

words.sort();

const input = document.querySelector("input");
const suggestions = document.querySelector("#suggestions");

const enterKeyCode = 13;

const clearSuggestions = () => {
  suggestions.innerHTML = "";
};

window.addEventListener("load", () => {
  input.value = "";
  clearSuggestions();
});

const checkLetterCase = (word) => {
  word = word.split("");
  let inputElementValue = input.value;
  for (let i in inputElementValue) {
    if (inputElementValue[i] === word[i]) {
      continue;
    } else if (inputElementValue[i].toUpperCase() === word[i]) {
      word.splice(i, 1, word[i].toLowerCase());
    } else {
      word.splice(i, 1, word[i].toUpperCase());
    }
  }
  return word.join("");
};

input.addEventListener("input", (e) => {
  clearSuggestions();
  let regEx = new RegExp("^" + input.value, "i");

  for (let i in words) {
    if (regEx.test(words[i]) && input.value !== "") {
      words[i] = checkLetterCase(words[i]);
      suggestions.innerHTML = words[i];
      break;
    }
  }
});

input.addEventListener("keydown", (e) => {
  if (e.code === enterKeyCode && suggestions.innerText !== "") {
    e.preventDefault();
    input.value = suggestions.innerText;
    clearSuggestions();
  }
});
