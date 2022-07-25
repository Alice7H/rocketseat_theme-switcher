import { resetTheme, getTheme, handleToggleTheme } from './modules/themes.js';

const element = document.querySelector('body');
const input = document.querySelector('#themeSwitcher');
const btnReset = document.querySelector('.reset');
const btnGet = document.querySelector('.get');

input.addEventListener('change', () => handleToggleTheme(element));
btnReset.addEventListener('click', resetTheme);
btnGet.addEventListener('click', () => {
  if (getTheme(element) || '') {
    input.checked = true;
    handleToggleTheme(element);
  }
});
