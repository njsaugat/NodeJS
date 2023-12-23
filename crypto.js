// // const va=require('crypto')
// // console.log(va)
// console.log(arguments)
// const cluster=require('cluster')
// const numInstance=require('os').cpus().length;
// console.log(numInstance)
// {EventEmitter.emit('change')}
// console.log(setTimeout)
// const http=require('http')
// console.log(http.ClientRequest)
// const _='hello';
// console.log(_)
// crypto
var i=0;
const http=require('http')
const server=http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url!='/favicon.ico'){// so basically browser makes 2 req
        // to kinda get the icon as well 
        i=i+1;
        console.log(`request sent ${i}`)
        // console.log('request sent')
        res.end('hello world');
    }
})
server.listen(3000,()=>console.log('heel'));// this  callback runs auto 
// as soon as the port is ready the callback is fired

