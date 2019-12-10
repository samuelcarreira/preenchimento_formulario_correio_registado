
function toogleVisibility(elm, otherElmID) {
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
    return s.split("").reverse().join("");
}

function checkPattern(elm, reverse = false) {
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
    if (localStorage.getItem('saveState') === false) {
        return;
    }

    const elms = document.querySelectorAll('[data-savestate]');

    elms.forEach(element => {
        element.value = localStorage.getItem(element.dataset.savestate);
        element.addEventListener('change', saveSetting);
    });
}

function saveSetting() {
    const settingName = this.dataset.savestate;
    
    if (!settingName) {
        return
    };

    localStorage.setItem(settingName, this.value);
}

(function () {
    loadSettings();
})();