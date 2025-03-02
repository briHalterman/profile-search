const https = require('https');
function getProfile() {
  // Connect to the API URL (https://teamtreehouse.com/profiles/csalgado.json)
  const request = https.get(
    'https://teamtreehouse.com/profiles/brihalterman.json',
    (response) => {
      let body = '';
      console.dir(response.statusCode);
      response.on('data', (data) => {
        body += data.toString();
      });
      response.on('end', () => {
        console.dir(JSON.parse(body));
      });
    }
  );
  // Read the data
  // Parse the data
  // Print the data
}
getProfile();
