const debug = require('debug')('my-application');
const app = require('./app');
const port = process.env.PORT || 3000;

const server = app.listen(port, function() {
  debug('Express server listening on port :' + port);
});
