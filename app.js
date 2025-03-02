const https = require('https');
function getProfile() {
  // Connect to the API URL (https://teamtreehouse.com/profiles/csalgado.json)
  const request = https.get(
    'https://teamtreehouse.com/profiles/brihalterman.json',
    (response) => {
      console.dir(response.statusCode);
      response.on('data', (data) => {
        console.dir(data);
      });
    }
  );
  // Read the data
  // Parse the data
  // Print the data
}
getProfile();
