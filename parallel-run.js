const request = require('request');
const { getOptionsForUser } = require('./Options')
const { getBatchIndexArrayTill, start, end } = require('./batch')
const Parallel = require('async-parallel');
const Response = require('./response-handler');

(async function () {
  const TOTAL_RECORDS = 1140000
  const JOBS = 100
  const BATCH_INDEXES = getBatchIndexArrayTill(JOBS)
  const BATCH_SIZE = TOTAL_RECORDS / JOBS

  await Parallel.each(BATCH_INDEXES, async BATCH_INDEX => {
    for (let index = start(BATCH_INDEX, BATCH_SIZE); index < end(BATCH_INDEX, BATCH_SIZE); index++) {
      request(getOptionsForUser(index), Response.handler)
    }
  });
})();
