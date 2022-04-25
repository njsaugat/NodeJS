console.log('start');

function loginUser(email,password,fun,getUserVideos){
    setTimeout(()=>{
        console.log('now we have the data');
        fun({userEmail:email})
        // getUserVideos(email)
    //     return function hello(){
    //         const obj={userEmail:email}
    //         return obj;
    //    }
    },5000)
    
}

function getUserVideos(email){
    setTimeout(()=>{
        // console.log("the user has gotten the videos, now time for some video time")
        console.log(`yes now you can watch videos also. signed in with ${email}`)
    },3000)
}
const user=loginUser('hl@hma.com',3232,(user)=>{
    console.log(user)
    getUserVideos(user.userEmail)
    })
// const user=loginUser('hl@hma.com',3232)
// user();
// console.log(user)
// console.assert
console.log('end');