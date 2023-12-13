import Notiflix from 'notiflix';
const form = document.querySelector('.form');

let greenCouter = 0;
let redCouter = 0;
const greenValues = document.querySelector('.green-values');
const redValues = document.querySelector('.red-values');

function createPromise(position, delay) {
  return new Promise((resolve, rejected) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        rejected({ position, delay });
      }
    }, delay);
  });
}
form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = parseInt(form.elements['delay'].value);
  const step = parseInt(form.elements['step'].value);
  const number = parseInt(form.elements['amount'].value);

  for (let i = 0; i < number; i += 1) {
    const finalDelay = delay + i * step;
    createPromise(i + 1, finalDelay)
      .then(({ position, delay }) => {
        greenCouter += 1;
        greenValues.textContent = `Zielony licznik wynosi: ${greenCouter}`;
        Notiflix.Notify.success(`
          ✅
          Fulfilled promise ${position} in ${delay}ms
        `);
      })
      .catch(({ position, delay }) => {
        redCouter += 1;
        redValues.textContent = `Czerwony licznik wynosi: ${redCouter}`;
        Notiflix.Notify.failure(`
          ❌
          Rejected promise ${position} in ${delay}ms
        `);
      });
  }
});
