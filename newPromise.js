// prom //running a promise before declaring it wont run it
// .then(fun1)
// .then(fun1)
// .then(fun1)
// .catch(fun2)
function changePromise(resolve,reject){
    const a=1+1;
    if(a===2){
        resolve(()=>('success'));
        // resolve('success');
    }else{
        reject('failed');
    }
}
// function changePromise(resolve,reject){
//     setTimeout(()=>{
//         const a=1+1;
//         if(a===2){
//             resolve('success');
//         }else{
//             reject('failed');
//         }
//     },5000)
    
// }


const prom=new Promise(changePromise)

function fun1(message){
    console.log('this is in the '+ message())

}

function fun2(message){
    console.log('this is in the '+ message)
}
// prom
// .then(fun1,fun1,fun1)
// // .then(fun1)
// // .then(fun1)
// .catch(fun2)
prom
.then(fun1)
// .then(fun1)
// .then(fun1)
.catch(fun2)

console.log("hello world")