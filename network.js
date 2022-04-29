const http=require('http');
const server=http.createServer((req,res)=>{
    if (req.url === '/favicon.ico') {// writing this line would ensure we dont have printed twice
        res.end();
        return;
    }
    console.log('hello there from console log');
    for(let i=0;i<1000;i++){
        res.write('hello there');
    }
    console.log(res.statusCode)
    console.log(req.statusCode)// returns null as req request doesn't
    // have as status code; only response have a status code;
    res.end();
    // console.log(res.end().constructor.name);

    console.log('heyy there!!')
});
server.listen(3000,()=>console.log('hello'));// this is async

console.log('hello;I will be printed first IG');// this will run first