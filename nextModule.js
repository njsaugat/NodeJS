// const name=require('./module.js');
// const add1=require('./module.js');


const obj=require('./module');//no need to pass the js extension
// console.log(obj);
console.log(obj.name);
console.log(obj.add(3,3));



// const string=require('./module');// pahila ko obj ko name ra esko name same huna pardaina
// console.log(string);
// but if that had been an object, then the object's keys had to be the same else we couldn't access them