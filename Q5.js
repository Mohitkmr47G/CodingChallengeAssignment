const validUrlRegex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[.][a-zA-Z]+$/;

function validateUrl(url) {
  if (validUrlRegex.test(url)) {
    console.log(`${url} is a valid URL.`);
  } else {
    console.log(`${url} is not a valid URL.`);
  }
}

const testUrls = [
  "http://www.example.com",
  "https://www.example.com",
  "http://123.com",
  "https://abc.xyz",
  "invalid-url",
];

testUrls.forEach(url => validateUrl(url));
