const person={
    name:'ram',
    sayMyName:()=>{
        return function hello(){
            // name='Ram';
            console.log(`My name is ${this.name}`);
        }
    },
    sayMyName2:()=> {
        console.log(`My name is ${this.name}`)

    }
}

// person.sayMyName()()
person.sayMyName2()
console.log(person.sayMyName())
