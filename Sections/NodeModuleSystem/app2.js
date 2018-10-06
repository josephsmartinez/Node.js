const EventEmitter = require('events');
//const emitter = new EventEmitter();
  
// Imported Object
const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => { //e, event arg
    console.log('Listener is called', arg);  
  });

logger.log('message');