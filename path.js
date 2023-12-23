// file path
const path=require('path');
console.log(path.sep)// essentially tries to show what is path seperator😉


const dir=__dirname;
const file=path.basename(dir);
console.log(file);

// so in node js globals are like require, __dirname,__filename, exports etc are global

// so in node js everything is basically a module 
// ani a module ko tala bhako function ni invoke hunxa if we are exporting that module--> mind grenade

// so basically node ma __dirname garera we can access the directory ko path
// ra using __filename, we can find out the file ko purai path thaha painxa

console.log(__filename);// eh ok file name le purai file samma ko path vanxa
console.log(__dirname);// tara dir name le only upto pathi ko directory 



const fil=__filename;// upper one is only upto directory; this one is upto base itself 
const file1=path.basename(fil);// this one is function of path which gives base ko info
console.log(file1);

// like we have __dirname and __filename but why to use path
// path use garera arko files/ subfolders ko path thaha paina sakinxa rather than afno


//so what we learned 
/*path.sep()--> duita path haru lai k le seperate gariraxa vanera herne
path.join()--> like path haru join garera (in this we provide like entire things to be joined, like harek directoy dine, elle concatenate garxa)
path.basename()--> kunai pani path ko last ma vako value;like purai euta path diyo vane tesko rightmost kura matra return garxa
path.resolve()-->like gives us the absolute path starting from the root directory(we provide a directory, ani tesko halka subfolders ani 
    it provides us the absolute path where it is located)// 
this provides the similar result as with above cases in windows because of the differences in 
file system ie root user and alot of that stuff


*/
// path.resolve()