const os = require('os');

const freeMemory = os.freemem;
const totalMemory = os.totalmem;

// One way using concatination
console.log("Total Memory: " + totalMemory/(1024*1024*1024) +"\n"
           +"Free Memory: " + freeMemory/(1024*1024*1024) +"\n");
           
// You use non-conationation syntax using tick ``
console.log(`Total Memory: ${totalMemory/(1024*1024*1024)} \n Free Memory: ${freeMemory/(1024*1024*1024)}`);