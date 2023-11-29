import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const startBtn = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');
let timeInterval;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const pickedDate = selectedDates[0];
    if (pickedDate < new Date()) {
      Notiflix.Report.failure(
        'Error',
        'Please choose a date in the future',
        'OK'
      );
      startBtn.setAttribute('disabled', true);
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};
const dateSelector = flatpickr('#datetime-picker', options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
const addLeadingZero = function (value) {
  return value.toString().padStart(2, '0');
};
const ramaingTime = function (endDate) {
  const now = new Date();
  const timeLeft = endDate - now;
  if (timeLeft <= 0) {
    clearInterval(timeInterval);
    Notiflix.Report.success(
      'Countdown Complete',
      'The countdown has reached the end date',
      'OK'
    );
  } else {
    //  Destrukturyzacja
    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    daysValue.textContent = addLeadingZero(days);
    hoursValue.textContent = addLeadingZero(hours);
    minutesValue.textContent = addLeadingZero(minutes);
    secondsValue.textContent = addLeadingZero(seconds);
  }
};
startBtn.addEventListener('click', () => {
  const chosenDate = dateSelector.selectedDates[0];
  if (chosenDate) {
    ramaingTime(chosenDate);
    timeInterval = setInterval(() => ramaingTime(chosenDate), 1000);
  }
});
