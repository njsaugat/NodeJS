
function changePromise(resolve,reject){
    const a=1+1;
    if(a===2){
        resolve('success');
    }else{
        reject('failed');
    }
}

const prom=new Promise(changePromise)

function fun1(message){
    console.log('this is in the '+ message)

}

function fun2(message){
    console.log('this is in the '+ message)
}
prom
.then(fun1)
.then(fun1)
.then(fun1)
.catch(fun2)