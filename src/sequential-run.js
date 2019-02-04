const request = require('request');
const { getOptionsForUser } = require('./utils/options')
const Response = require('./handler/response-handler');

(() => {
  const TOTAL_RECORDS = 1000
  // const TOTAL_RECORDS = 1140000
  for (let index = 0; index < TOTAL_RECORDS; index++) {
    request(getOptionsForUser(index), Response.handler)
  }
})();
