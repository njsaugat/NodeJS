let done = true

const isItDoneYet = new Promise((resolve, reject) => {
    console.log('promise called')
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
})

const checkIfItsDone = () => {
    isItDoneYet
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(err)
        })
    console.log('outside the promise');
}

checkIfItsDone()
console.log('hello there')