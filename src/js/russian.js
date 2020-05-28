const russian = [
  {
    small: "'",
    shift: '₴',
    code: 'Backquote',
  },
  {
    small: '1',
    shift: '!',
    code: 'Digit1',
  },
  {
    small: '2',
    shift: '"',
    code: 'Digit2',
  },
  {
    small: '3',
    shift: '№',
    code: 'Digit3',
  },
  {
    small: '4',
    shift: ';',
    code: 'Digit4',
  },
  {
    small: '5',
    shift: '%',
    code: 'Digit5',
  },
  {
    small: '6',
    shift: ':',
    code: 'Digit6',
  },
  {
    small: '7',
    shift: '?',
    code: 'Digit7',
  },
  {
    small: '8',
    shift: '*',
    code: 'Digit8',
  },
  {
    small: '9',
    shift: '(',
    code: 'Digit9',
  },
  {
    small: '0',
    shift: ')',
    code: 'Digit0',
  },
  {
    small: '-',
    shift: '_',
    code: 'Minus',
  },
  {
    small: '=',
    shift: '+',
    code: 'Equal',
  },
  {
    small: 'Backspace',
    shift: 'Backspace',
    size: 2,
    code: 'Backspace',
  },
  {
    small: 'Tab',
    shift: 'Tab',
    size: 2,
    code: 'Tab',
    value: '\t',
  },
  {
    small: 'й',
    shift: 'Й',
    code: 'KeyQ',
  },
  {
    small: 'ц',
    shift: 'Ц',
    code: 'KeyW',
  },
  {
    small: 'у',
    shift: 'У',
    code: 'KeyE',
  },
  {
    small: 'к',
    shift: 'К',
    code: 'KeyR',
  },
  {
    small: 'е',
    shift: 'Е',
    code: 'KeyT',
  },
  {
    small: 'н',
    shift: 'Н',
    code: 'KeyY',
  },
  {
    small: 'г',
    shift: 'Г',
    code: 'KeyU',
  },
  {
    small: 'ш',
    shift: 'Ш',
    code: 'KeyI',
  },
  {
    small: 'щ',
    shift: 'Щ',
    code: 'KeyO',
  },
  {
    small: 'з',
    shift: 'З',
    code: 'KeyP',
  },
  {
    small: 'х',
    shift: 'Х',
    code: 'BracketLeft',
  },
  {
    small: 'ї',
    shift: 'Ї',
    code: 'BracketRight',
  },
  {
    small: '\\',
    shift: '/',
    code: 'Backslash',
  },
  {
    small: 'Caps Lock',
    shift: 'Caps Lock',
    size: 2,
    code: 'CapsLock',
  },
  {
    small: 'ф',
    shift: 'Ф',
    code: 'KeyA',
  },
  {
    small: 'і',
    shift: 'І',
    code: 'KeyS',
  },
  {
    small: 'в',
    shift: 'В',
    code: 'KeyD',
  },
  {
    small: 'а',
    shift: 'А',
    code: 'KeyF',
  },
  {
    small: 'п',
    shift: 'П',
    code: 'KeyG',
  },
  {
    small: 'р',
    shift: 'Р',
    code: 'KeyH',
  },
  {
    small: 'о',
    shift: 'О',
    code: 'KeyJ',
  },
  {
    small: 'л',
    shift: 'Л',
    code: 'KeyK',
  },
  {
    small: 'д',
    shift: 'Д',
    code: 'KeyL',
  },
  {
    small: 'ж',
    shift: 'Ж',
    code: 'Semicolon',
  },
  {
    small: 'є',
    shift: 'Є',
    code: 'Quote',
  },
  {
    small: 'Enter',
    shift: 'Enter',
    size: 2,
    code: 'Enter',
    value: '\n',
  },
  {
    small: 'Shift',
    shift: 'Shift',
    size: 2,
    code: 'ShiftLeft',
  },
  {
    small: 'я',
    shift: 'Я',
    code: 'KeyZ',
  },
  {
    small: 'ч',
    shift: 'Ч',
    code: 'KeyX',
  },
  {
    small: 'с',
    shift: 'С',
    code: 'KeyC',
  },
  {
    small: 'м',
    shift: 'М',
    code: 'KeyV',
  },
  {
    small: 'и',
    shift: 'И',
    code: 'KeyB',
  },
  {
    small: 'т',
    shift: 'Т',
    code: 'KeyN',
  },
  {
    small: 'ь',
    shift: 'Ь',
    code: 'KeyM',
  },
  {
    small: 'б',
    shift: 'Б',
    code: 'Comma',
  },
  {
    small: 'ю',
    shift: 'Ю',
    code: 'Period',
  },
  {
    small: '.',
    shift: ',',
    code: 'Slash',
  },
  {
    small: '▲',
    shift: '▲',
    code: 'ArrowUp',
  },
  {
    small: 'Shift',
    shift: 'Shift',
    size: 2,
    code: 'ShiftRight',
  },
  {
    small: 'Ctrl',
    shift: 'Ctrl',
    code: 'ControlLeft',
  },
  {
    small: 'Win',
    shift: 'Win',
    code: 'Win',
  },
  {
    small: 'Alt',
    shift: 'Alt',
    code: 'AltLeft',
  },
  {
    small: '',
    shift: '',
    size: 6,
    code: 'Space',
    value: ' ',
  },
  {
    small: 'Alt',
    shift: 'Alt',
    code: 'AltRight',
  },
  {
    small: 'Ctrl',
    shift: 'Ctrl',
    code: 'ControlRight',
  },
  {
    small: '◄',
    shift: '◄',
    code: 'ArrowLeft',
  },
  {
    small: '▼',
    shift: '▼',
    code: 'ArrowDown',
  },
  {
    small: '►',
    shift: '►',
    code: 'ArrowRight',
  },
];
export default russian;
