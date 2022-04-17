// const os=require('os');
for(let i=0;i<39;i++){
    console.log('hello')
}
process.nextTick(()=>{
    console.log('next tick');
    // setTimeout(()=>{
    // },0)
})

setTimeout(()=>{
    console.log('set time')
},0)

console.log(globalThis)