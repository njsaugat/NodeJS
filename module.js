const name='hello';

const add=(num1, num2)=>{
    return num1+num2;

}
// module.exports=name;

// module.exports=add;

// other method to like export name and add function as once is by passing them as an object;

module.exports={name, add};

// console.log(module)// whatever is ther after export is also exported kinda like tyo print garne wala stuff
// console.log('hello world');// while exported this also gets printed in the other file

// module.exports=name; like this way export can be done


//



//other way of doing exporting the stuff
// in this approach we are basically passing out the stuff entirely 
// like obj1 lai yehi object banera export gari halya
// but this i don't consider a good approach 

module.exports.obj1={ 
    name:'hello Sumedha',
    sub:(num1,num2)=>{
        return num1-num2;
    }
}


// so basically 
// module.exports garera tesma j export garne ho assignn garna sakiyo
// next thing is tyo module.exports ma euta object lai ni assign garna sakinxa

// lasty module.exports.obj={s:'l'}; ho esari ni directly euta object lai tyaha directly pass garna sakinxa

