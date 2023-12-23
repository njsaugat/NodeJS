// let var const
let i=1
console.log(++i);
const a=2
// a=34;
console.log(a);
// error when modifying the vlaue of const
// const is like a rock
// it's value wont get changed and modified
// just like a  rock

// let is like a mini version
// the vlaue of let can be changed, also type can be change
//but like redeclaring gives error

// valid with let:
let b=5;
b=543;
console.log(b)// value changed
b='hello '
console.log(b);


//invalid with let
let c=5;
// let c=75;
//      ^
//      |
//      |
// so this is not allowed with let]
// ie no redeclaration


// the other stuff with let is that it is
// block scope ie

{
    let a=324;
    console.log(a)
    // using a is possible here although a was const above
    // this is because of the block that is being defined
    
}