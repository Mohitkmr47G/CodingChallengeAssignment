function reverseString(str) {
  return str.split('').reverse().join('');
}

const input = "Hello, World!";

setTimeout(function() {
  const reversed = reverseString(input);
  console.log(`Reversed string: ${reversed}`);
}, 2000);
