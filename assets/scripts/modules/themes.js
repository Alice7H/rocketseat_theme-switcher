import { saveOnLocalStorage, getOnLocalStorage, removeOnLocalStorage } from './storage.js';

const DARK = 'dark';
const LIGHT = 'light';
const THEME = 'theme';

function onCurrentTheme(element) {
  return element.classList.contains(LIGHT) ? LIGHT : DARK;
}

function onSaveTheme(element) {
  const currentTheme = onCurrentTheme(element);
  saveOnLocalStorage(THEME, currentTheme);
}

export function handleToggleTheme(element) {
  element.classList.toggle(LIGHT);
  onSaveTheme(element);
}

export function getTheme(element) {
  const theme = getOnLocalStorage(THEME);
  const currentTheme = onCurrentTheme(element);
  if (theme === null)
    alert('Não existe tema salvo no localStorage');
  else if (theme === currentTheme)
    alert('Você já está usando este tema');
  else
    return theme;
}

export function resetTheme() {
  removeOnLocalStorage(THEME);
  alert('Tema removido do localStorage');
}