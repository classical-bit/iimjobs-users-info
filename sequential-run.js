const request = require('request');
const { getOptionsForUser } = require('./Options')
const Response = require('./response-handler');

(() => {
  const TOTAL_RECORDS = 1140000
  for (let index = 0; index < TOTAL_RECORDS; index++) {
    request(getOptionsForUser(index), Response.handler)
  }
})();
