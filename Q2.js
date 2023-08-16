let delayInSeconds = 3;
let countdown = delayInSeconds;

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Generated random number: ${randomNumber}`);
}

const intervalId = setInterval(function() {
  if (countdown > 0) {
    console.log(`Time remaining: ${countdown} seconds`);
    countdown--;
  } else {
    clearInterval(intervalId);
    generateRandomNumber();
  }
}, 1000);
