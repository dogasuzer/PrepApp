export function generateRandomColor() {
  return Math.floor(Math.random() * 12) + 1;
}
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function generateRandomId() {
  return Math.random();
}
