const eventEmitter = require('events')

var url = 'http://mylogger.io/log';

class Logger extends eventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);
    
    // raise an event
    this.emit('messageLogged', { id: 1, url: 'http://...' })
  }
}


module.exports = Logger; // Export the log function

