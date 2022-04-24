// console.log(fetch('https://api.github.com/user'))
fetch('https://api.github.com/users',{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        name:'User 1'
    })
})
    .then(res =>{
        // if(res.ok){
        //     console.log('SUCCESS')
        // }
        return res.json();
    })
    .then(data=>console.log(data))
    .catch(error=>console.log('ERROR'))


console.log('hello world; what is your name; I am trying to find out')
console.log('hello world; hey what you want to do')
console.log(`
hello there; the angel from my nightmare
the player wanna head toward you
hey so what is the way to do 
nice way to do is the 
process to kinda improve the way to do 
hence what is the way to do 
so what is the I am a sample text file
promise is also like proxy for a value
file read and write could be written as  a way
to kinda like read the value
once the value is recieved
then we can kinda like wanna make the stuff
that we want to remove the process is that 
we can to do that is the way of nicely 
using the process to do the task
so the way to do tthe process to do the important
task is to nicely process the way to improve the
process; nice to have the probability to 
increase the process of increasing the process of 
hi now what to do is the way to kinda improve the 
process is the way to 
is through some of the ways to i
increase  the process the way of 
improving the process of 
increasing the processs of now
doing the process 
so yes we can do it
now we will do it 
`)
