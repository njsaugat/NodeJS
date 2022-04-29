const http=require('http');
const server=http.createServer((req,res)=>{
    if (req.url === '/favicon.ico') {// writing this line would ensure we dont have printed twice
        res.end();
        return;
    }
    

    if(req.url==='/hello' && req.method==='GET'){
        res.setHeader("Content-Type","Application/JSON");
        res.write(JSON.stringify({"name":"hello","age":27,"address":"rampur"}))
        //dont forget to add JSON.stringify
        res.end();
        // res.writeHead(200,{"Content-Type":"application/JSON"})
    }else{
        console.log('hello there from console log');
        res.setHeader("Content-Type","text/HTML");
        for(let i=0;i<10;i++){
            
            res.write('hello there');
        }
        console.log(res.statusCode)
        console.log(req.statusCode)// returns null as req request doesn't
        // have as status code; only response have a status code;
        res.end();
    // console.log(res.end().constructor.name);
    }

    console.log('heyy there!!')
});
server.listen(3000,()=>console.log('hello'));// this is async

console.log('hello;I will be printed first IG');// this will run first