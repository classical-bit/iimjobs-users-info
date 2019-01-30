function getBatchIndexArrayTill(number) {
  let BATCH_INDEXES = [];
  for (let index = 0; index < number; index++) {
    BATCH_INDEXES.push(index);
  }
  return BATCH_INDEXES
}

function start(batchIndex, batchSize) {
  return batchIndex * batchSize;
}

function end(batchIndex, batchSize) {
  return batchIndex * batchSize + batchSize
}
module.exports = {
  getBatchIndexArrayTill,
  start,
  end
}