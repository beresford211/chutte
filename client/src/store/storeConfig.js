if (process.env.NODE_ENV === 'production') {
  console.log("production testing")
  module.exports = require('./storeConfig.prod')
} else {
  console.log("dev testing", process.env.NODE_ENV)
  module.exports = require('./storeConfig.dev')
}
