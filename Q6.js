const validLinkedInUrlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

function validateLinkedInUrl(url) {
  if (validLinkedInUrlRegex.test(url)) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
}

const testUrls = [
  "https://www.linkedin.com/in/johndoe",
  "https://www.linkedin.com/in/mary_smith",
  "https://www.linkedin.com/in/12345",
  "https://www.linkedin.com/in/user123456789012345678901234567890",
  "https://www.linkedin.com/in/user%",
];

testUrls.forEach(url => validateLinkedInUrl(url));
