// Event listener should be registered first before events happen
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener. 
emitter.on('messageLogged', (arg) => { //e, event arg
  console.log('Listener is called', arg);  
});

/*
emitter.on('messageLogged', function(arg){ //e, event arg
    console.log('Listener is called', arg);  
  });
*/

// Raise an event. Notice how an object is passed
emitter.emit('messageLogged', {id: 1, url: 'http://'});


// Resouces:
//https://nodejs.org/dist/latest-v8.x/docs/api/events.html

