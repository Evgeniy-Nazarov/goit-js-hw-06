const changeFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
changeFontSize.addEventListener('input', event => {
    text.style.fontSize = event.target.value + 'px';
});