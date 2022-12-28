const textInput = document.querySelector('#name-input');
console.log(textInput);
const textOutput = document.querySelector('#name-output');
console.log(textOutput);
textInput.addEventListener('input', () => {
  if (textInput.value === '') {
    textOutput.textContent = 'Anonymous';
  } else {
    textOutput.textContent = textInput.value;
  }
}   );