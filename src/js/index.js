import english from './english';
import russian from './russian';
import '../css/styles.scss';

const body = document.getElementsByTagName('body')[0];

/** Create textarea */
const section = document.createElement('section');
section.setAttribute('class', 'container');
const textarea = document.createElement('textarea');
textarea.setAttribute('class', 'app-textarea');
section.appendChild(textarea);

/** create comment */
const comment = document.createElement('section');
const p = document.createElement('p');
const p2 = document.createElement('p');
p2.innerText = 'Teclado criado no sistema operacional Linux';
p.innerText = 'Para alternar a combinação de idiomas: ctrl + alt';
comment.appendChild(p);
comment.appendChild(p2);
section.appendChild(comment);

/** Create keybord */
const secondSection = document.createElement('section');
secondSection.setAttribute('class', 'keyboard');
const ul = document.createElement('ul');
secondSection.appendChild(ul);

// /** Change language */
let languages = english;
const ChangeLanguage = () => {
  return languages !== russian ? russian : english;
};

let htmlElements = [];

const createHtmls = (language) => {
  htmlElements = language.map((el) => {
    const button = document.createElement('button');
    button.setAttribute('id', el.code);
    button.setAttribute('class', `button-key ${el.code}`);
    button.innerText = el.small;
    return button;
  });
};
const thridSection = document.createElement('section');

const IncludehtmlElements = (html) => {
  html.forEach((element) => {
    thridSection.appendChild(element);
  });
};
const includeChild = (el) => {
  ul.appendChild(el);
};

createHtmls(languages);
IncludehtmlElements(htmlElements);
includeChild(thridSection);

const elements = [];
document.addEventListener(
  'keydown',
  (e) => {
    elements[e.which] = true;
    if (elements[17] && elements[18]) {
      const existEl = document.getElementsByClassName('button-key');
      if (existEl) {
        ul.removeChild(ul.firstChild);
        languages = ChangeLanguage();
        createHtmls(languages);
        IncludehtmlElements(htmlElements);
        includeChild(thridSection);
      }
    }
  },
  false
);

document.addEventListener(
  'keyup',
  (e) => {
    elements[e.which] = false;
    stop();
  },
  false
);

section.appendChild(secondSection);
body.appendChild(section);

/** Change style */
const buttonsBlack = [8, 9, 13, 17, 46, 20, 16, 18, 225, 37, 38, 39, 40, 'Win'];

const letters = [];
document.addEventListener('keydown', (e) => {
  let arrows = english.filter((el) => {
    if (e.which >= 37 || e.which <= 40) {
      textarea.innerText += el.small;
    }
    textarea.innerText += e.code;
  });
});
document.addEventListener('keydown', (e) => {
  document.querySelector(`#${e.code}`).style.background = '#9C27B0';
});

document.addEventListener('keyup', (e) => {
  if (buttonsBlack.includes(e.which)) {
    document.querySelector(`#${e.code}`).style.background = '#000';
  } else {
    document.querySelector(`#${e.code}`).style.background = '#444141';
  }
});

/** Backspace */

document.addEventListener('keydown', (e) => {
  if (e.code === 8) {
    textarea.innerText = letters.length - 1;
  }
});

/** shift */

document.addEventListener('keydown', (e) => {
  if (e.which === 16) {
    textarea.innerText = languages.forEach((el) => el.shift);
  } else {
    textarea.innerText = languages.forEach((el) => el.small);
  }
});

/** capsLock*/

document.addEventListener('keydown', (e) => {
  if (e.which === 20) {
    textarea.innerText = languages.forEach((el) => el.shift);
  } else {
    textarea.innerText = languages.forEach((el) => el.small);
  }
});

const callback = () => {
  document.querySelector(`#${english.code}`).style.background = '#9C27B0';
  document.removeEventListener('click', callback);
};
document.addEventListener('click', callback);
