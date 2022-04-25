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

// so this was the basic promise-- right?

// loginDetatils
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

// doing the same stuff with async await ie more kinda sync code

async function loginUser(){
    const value=await loginDetatils();
    console.log(value)
}