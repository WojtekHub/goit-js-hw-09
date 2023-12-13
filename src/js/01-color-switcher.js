const results = document.querySelector('#results');
const buttonStart = document.querySelector('#data-start');
const buttonStop = document.querySelector('#data-stop');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStart.addEventListener('click', () => {
  const timer = setInterval(() => {
    document.getElementById('results').style.backgroundColor =
      getRandomHexColor();
    buttonStart.setAttribute('disabled', true);
  }, 1000);

  buttonStop.addEventListener('click', () => {
    clearInterval(timer);
    console.log('TimeInterval STOP!');
    buttonStart.removeAttribute('disabled');
  });
});
