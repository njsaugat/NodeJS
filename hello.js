// find hello
const prom=new Promise((resolve,reject)=>{
    const a=4;
    if(a==4){
        resolve('true')
    }else{
        reject('false')
    }
})

prom
.then((mess)=>{
    console.log('hello world '+ mess)
})
.catch((mess)=>{
    console.log('not hello world '+ mess)
})