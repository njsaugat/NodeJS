const http=require('http');
const { hostname } = require('os');
const server=http.createServer((req,res)=>{
    const replacerFunc = () => {
        const visited = new WeakSet();
        return (key, value) => {
          if (typeof value === "object" && value !== null) {
            if (visited.has(value)) {
              return;
            }
            visited.add(value);
          }
          return value;
        };
      };
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
    }else if(req.url==='/others' && req.method==='GET'){
        res.setHeader("Content-Type","Application/JSON")
        // res.setHeader("Content-Type","text/HTML")
        // this code is copied from stackOverflow


        // what it does is since JSON.stringify can't take circular
        //objects, the function converts the circular object request into
        // non circular one
        
          
          
        // res.write(JSON.stringify(req));
        // res.write(JSON.stringify(req, replacerFunc()));
        // res.write(JSON.stringify(req.url, replacerFunc()));
        res.write(JSON.stringify(req, replacerFunc()));
        // res.write(JSON.stringify(req.rawHeaders, replacerFunc()));
        // res.write(JSON.stringify(req.body, replacerFunc()));
        // res.write(JSON.stringify(req[user-agent], replacerFunc()));
        res.end();
        
    }
    else if(req.url==='/contact' && req.method==='POST'){
        res.setHeader("Content-Type","Application/JSON")
        const value=JSON.stringify(req, replacerFunc());
        // so like post vaneko kam chai yo hunxa ki 
        // like client bata ako value lai store garne or database ma
        // store garne khalko kura haru auxa ni so 
        console.log(value);
        res.end(); 
    }
    else{
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