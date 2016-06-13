if (process.env.NODE_ENV === 'development') {
  module.exports = require('./storeConfig.dev')
} else {
  module.exports = require('./storeConfig.prod')
}
