const fs=require('fs');
console.log('first we print before doing anything')
fs.writeFile('./fsBYjs/testAsyn1.txt',`so first we write the line
    then in this file only we will read
    then again we try to use like write and read operation 
    this is going to be async code, hence
    will cover some of the important concepts`,
    (err)=>{
        if(err){
            console.log(err+'this is the error in writeFile so ')
        }
        const data1= fs.readFile('./fsBYjs/testAsyn1.txt','utf-8',
                (err,data)=>{
                    if(err){
                        console.log(err+'this is from the readFile so testing it.')
                    }
                    console.log(data);
                })
        const data2=fs.readFileSync('./fsBYjs/testAsyn1.txt','utf-8')
        console.log(data2);
        console.log(data1+" here is it")
    }
)
console.log('testing whether it will execute this or not')
// console.log(fileData);
// console.log(fileData)
console.log('finally printed guys!!')
