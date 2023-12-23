// for callback
const add=function(num1,num2){
    return num1+num2;
}// this is the real function



const callback=function(fun){// here fun is the function reference that is being passed

    console.log(fun(1020,4));// on that refernce function we are calling the function with the arguments
    // basically  we are calling the function later whenever we want
    
}




const sum=add;// without braces, we only store the reference of the function; so we have refernce stored in sum function
callback(sum);// now we are passing the refernce of sum function to callback function


