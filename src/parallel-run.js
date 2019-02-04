const request = require('request');
const { getOptionsForUser } = require('./utils/options');
const { getBatchIndexArrayTill, start, end } = require('./utils/batch');
const Parallel = require('async-parallel');
const Response = require('./handler/response-handler');
const cluster = require('cluster');
const CPUS = require('os').cpus().length;


// const TOTAL_RECORDS = 1140000;
// const JOBS = 100;
const TOTAL_RECORDS = 100;
const JOBS = CPUS;
const BATCH_INDEXES = getBatchIndexArrayTill(JOBS);
const BATCH_SIZE = TOTAL_RECORDS / JOBS;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < CPUS; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  console.log(`Worker ${process.pid} started`);
  (async function () {

    await Parallel.each(BATCH_INDEXES, async BATCH_INDEX => {
      for (let index = start(BATCH_INDEX, BATCH_SIZE); index < end(BATCH_INDEX, BATCH_SIZE); index++) {
        // request(getOptionsForUser(index), Response.handler);
        console.log("\x1b[1m", index);
      }
    });
  })();
}


