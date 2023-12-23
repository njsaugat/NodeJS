// find fssync
const fs = require("fs"); // like this way we have access to the file system
// I am making the changes directly

// this is to make a directory by using Sync method
// fs.mkdirSync('fsBYjs');// running this command made me create a file directory

//this is to like create a file
// to create a file pani we will use writeFileSync
// ie this functionality of fs allows us to create a file
/*
            |
            |
            |
            |
            |
            v
*/
// fs.writeFileSync('./fsBYjs/first.txt','hello, this is my  first file');

// if i again execute this line of code then, it will change the content of the first.txt
// so to write anything extra we use appendFileSync prolly
/*
            |
            |
            |
            |
            |
            v
*/

// fs.writeFileSync('./fsBYjs/first.txt','this is my  first file and the word hello is removed from previous file ');

// hence we use append to add at last instead of re-writing it agian

//fs.appendFileSync('./fsBYjs/first.txt','yes now this is the context that is going to be added on the particular file');

// if i re-run the same code, then this text will be appended again

/*
            |
            |
            |
            |
            |
            v
*/
// fs.appendFileSync('./fsBYjs/first.txt','yes now this is the context that is going to be added on the particular file');

// hence while appending the text we have to take care

// this is the way to like use loop to add some content in the file
/*
            |
            |
            |
            |
            |
            v
*/

// for(let i=0;i<100;i++){
//     fs.appendFileSync('./fsBYjs/first.txt'," , "+ String(i))+",";
// }

// so after all this, we have kinda like the message out there in the file, but we haven't read it;
// hence let's go and let's read that

// fs.readFileSync('./fsBYjs/first.txt',"utf-8");// this thing returns the value so it has to be saved somewhere to get the value

// the other way to append a file with write command is as follows:
/*
            |
            |
            |
            |
            |
            v
*/

// fs.writeFileSync('./fsBYjs/first.txt','yeah this is thru write but with append flag', {flag:'a'})

const fileData = fs.readFileSync("./fsBYjs/first.txt", "utf-8");
console.log(fileData);
