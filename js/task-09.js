function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
if (button) {
  button.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
  });
}