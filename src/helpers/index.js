export function convertToK(amount) {
  let number = parseInt(amount);
  if (number >= 1000) {
    return (number / 1000).toFixed(0) + 'k';
  } else {
    return number.toString();
  }
}
