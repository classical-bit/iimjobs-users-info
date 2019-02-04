const fs = require('fs');

function handler(error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.appendFile('iimjob_scraped_output.txt', body + ',', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  }
}

module.exports = {
  handler
}