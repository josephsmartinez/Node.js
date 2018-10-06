const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    //Method log 
    log(message){
    // Send an HTTP request
    console.log(message);
    // Raise an event.
    this.emit('messageLogged', {id: 1, url: 'http://'});
  }
}


// Exporting Functions
module.exports = log;

// Exporting a Object
//              bar       foo
module.exports.endPoint = url;

// Exporting and object
module.exports = Logger;