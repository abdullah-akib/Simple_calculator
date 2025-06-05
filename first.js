let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerHTML.trim(); // remove extra space

    if (value === '=') {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } else if (value === 'AC') {
      string = "";
      input.value = string;
    } else if (value === 'DEL') {
      string = string.slice(0, -1);
      input.value = string;
    } else if (value === '%') {
      string += '/100'; // ✅ make % work like a calculator
      input.value = string;
    } else {
      string += value;
      input.value = string;
    }
  });
});
