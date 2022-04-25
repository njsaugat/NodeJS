const data=false;

const loginDetatils=new Promise((resolve, reject)=>{
    if(data){
        console.log('we are in this block; It will be immediately invoked');
        resolve('hello there~ the angel from my nightmare');
    }else{
        console.log('error has occurred');
        reject('error')
    }
})

const loginDetatil=function(){
    return new Promise((resolve, reject)=>{
    if(data){
        console.log('we are in this block; It will be immediately invoked');
        resolve('hello there~ the angel from my nightmare');
    }else{
        console.log('error has occurred');
        reject('error')
    }
})
}

// so this was the basic promise-- right?

// loginDetatils
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

// doing the same stuff with async await ie more kinda sync code

async function loginUser(){
    // const value=await loginDetatils;// loginDetails is not a function; so try to think it as one
    try{
        const value=await loginDetatil();// loginDetail is  a function; 
        console.log(value)
    }
    catch{
        console.error(new Error)
    }
   
}

loginUser()

// generally with async await we kinda use functions and stuff
// so .then use bhako thau ma chai await garna paryo
// to handle errors with async await, we use try and catch
