export function generateUniqueID() {
  const randomNumber = Math.floor(Math.random() * 1000000);
  const string = Date.now().toString(36);
  return `${string}-${randomNumber}`;
}
