function handler(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.dir(JSON.parse(body))
  }
}

module.exports = {
  handler
}