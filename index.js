const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('BODY'),
  colors: ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'],
  colorsId: null,
  isActiv: false,
};

refs.btnStart.addEventListener('click', onStartClick);

function onStartClick() {
  refs.btnStart.setAttribute('disabled', true)
  if (refs.isActiv) {
    return;
  }
  refs.colorsId = setInterval(() => {
    refs.isActiv = true;
    let index = randomIntegerFromInterval(0, refs.colors.length);
    refs.body.style.backgroundColor = refs.colors[index];
  }, 1000);
}

refs.btnStop.addEventListener('click', onStopClick);

function onStopClick() {
  refs.btnStart.removeAttribute('disabled', true)
  refs.isActiv = false;
  refs.body.removeEventListener('click', onStartClick);
  clearInterval(refs.colorsId);
}
