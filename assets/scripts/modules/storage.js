export function saveOnLocalStorage(key, value) {
  localStorage.setItem(key, value);
}
export function removeOnLocalStorage(value) {
  localStorage.removeItem(value);
}
export function getOnLocalStorage(value) {
  return localStorage.getItem(value);
}