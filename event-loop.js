//timers-> pending callbacks-> idle, prepare -> check  ->  poll -> close callbacks

const fs = require('fs');
const crypto = require('crypto');

console.log('1. Start Script')
setTimeout(()=> {
  console.log('2. Set timeout 0s callback (macrotask) ');
}, 0);


setTimeout(() => {
  console.log('3. Set timeout 0s callback (macrotask) ');
})

setImmediate(() => {
  console.log('4. Set immediate callback (check) ');
})

//
Promise.resolve().then(() => {
  console.log('5. Promise resolved (microtask) ');
})

process.nextTick(() => {
  console.log('6. Process next tick (microtask) ');
})

fs.readFile('event-loop.js', () => {
  console.log('7. Read file operation (I/O callback) ');
})

crypto.pbkdf2('password', 'salt', 10000, 64, 'sha512', (err, key) => {
  if(err) throw err;
  console.log('8. pbkdf2 operation completed (CPU intesive task) ');
})


console.log('9. End Script')