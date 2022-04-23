const http=require('http');

// console.log(http);
const server=http.createServer((req,res)=>{
    res.write('<h1>welcome to home page</h1>')
    res.end()
})
server.listen(5000)