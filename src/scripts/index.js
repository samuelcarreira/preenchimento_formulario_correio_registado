import '../stylesheets/app.scss';

import '../stylesheets/dialog-polyfill.css';

import dialogPolyfill from 'dialog-polyfill';

export function toogleVisibility(elm, otherElmID) {
  if (elm.checked) {
    document.getElementById(otherElmID).style.visibility = 'visible';
  } else {
    document.getElementById(otherElmID).style.visibility = 'hidden';
  }
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function isNumber(c) {
  return !isNaN(parseInt(c));
}

// WARNING: only works with simple ASCII characters
function reverseStr(s) {
  return s.split('').reverse().join('');
}

export function checkPattern(elm, reverse = false) {
  let value = elm.value;

  if (value.trim().length < 1) {
    return;
  }

  let pattern = elm.dataset.pattern;

  if (value.length > pattern.length) {
    elm.value = value.substring(0, pattern.length);
    return;
  }

  if (reverse) {
    value = reverseStr(value);
  }

  if (reverse) {
    pattern = reverseStr(pattern);
  }

  for (let i = 0; i < value.length; i += 1) {
    const patternChar = pattern.charAt(i);
    const currentChar = value.charAt(i);

    if (patternChar === 'D') {
      if (!isNumber(currentChar)) {
        // not a number
        value = value.substring(0, i) + value.substring(i + 1, value.length);
      }
    } else if (patternChar === 'W') {
      if (!isLetter(currentChar)) {
        // not a letter
        value = value.substring(0, i) + value.substring(i + 1, value.length);
      }
    } else if (patternChar === ' ') {
      if (currentChar !== ' ') {
        // add space
        value = value.substring(0, i) + ' ' + value.substring(i, value.length);
      }
    }
  }

  elm.value = reverse ? reverseStr(value) : value;
}

function loadSettings() {
  const elms = document.querySelectorAll('[data-savestate]');

  elms.forEach((element) => {
    element.value = localStorage.getItem(element.dataset.savestate);
    element.addEventListener('change', saveSetting);
  });

  document.getElementById('x-adjust').value =
    localStorage.getItem('x') === null ? 0 : localStorage.getItem('x');
  document.getElementById('y-adjust').value =
    localStorage.getItem('y') === null ? 0 : localStorage.getItem('y');
}

function saveSetting() {
  if (!document.getElementById('checkbox-savedata').checked) return;

  const settingName = this.dataset.savestate;

  if (!settingName) {
    return;
  }

  localStorage.setItem(settingName, this.value);
}

document.getElementById('btn-settings').addEventListener('click', () => {
  const dialogSettings = document.getElementById('dialog-settings');
  dialogSettings.showModal();
});

document.getElementById('btn-info').addEventListener('click', () => {
  const dialogAbout = document.getElementById('dialog-about');
  dialogAbout.showModal();
});

document.getElementById('btn-clearstorage').addEventListener('click', () => {
  const elms = document.querySelectorAll('[data-savestate]');

  elms.forEach((element) => {
    element.value = '';
    localStorage.removeItem(element.dataset.savestate);
  });

  alert('Os dados foram removidos com sucesso!');
});

document.getElementById('x-adjust').onchange = function () {
  document.documentElement.style.setProperty('--offset-x', `${this.value}mm`);

  localStorage.setItem('x', this.value);
};

document.getElementById('y-adjust').onchange = function () {
  document.documentElement.style.setProperty('--offset-y', `${this.value}mm`);

  localStorage.setItem('y', this.value);
};

document.getElementById('checkbox-savedata-settings').addEventListener('change', (event) => {
  document.getElementById('checkbox-savedata').checked = event.target.checked;
});

document.getElementById('checkbox-savedata').addEventListener('change', (event) => {
  document.getElementById('checkbox-savedata-settings').checked = event.target.checked;
});

export function closeModal(elm) {
  elm.parentElement.parentElement.close();
}

function checkWebkit() {
  if (navigator.userAgent.indexOf('AppleWebKit') !== -1) return;

  document.getElementById('warning-chrome').style.display = 'block';
}

(function () {
  checkWebkit();
  loadSettings();

  const dialog = document.querySelector('dialog');
  dialogPolyfill.registerDialog(dialog);

  const dialogAbout = document.getElementById('dialog-about');
  dialogAbout.showModal();
})();
