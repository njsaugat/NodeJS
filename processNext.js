process.nextTick(()=>console.log(' And I am invincible'))
console.log('hello world; 1st line');

setTimeout(()=>console.log('I am setimeout'),0)
console.log("hello world: last line");