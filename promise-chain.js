const { readFile } = require('fs/promises');

function multiCall(){
    const hugeFile = readFile('huge.txt')
    hugeFile.then(b=>console.log(b.toString()))
    const helloFile = readFile("hello.txt")
    helloFile.then(b=>console.log(b.toString()))
}
//multiCall()

// if you need to ensure they run in a certain order you must chain the callbacks

function chaining(){
    const hugeFile = readFile('huge.txt')
    hugeFile.then(b=>console.log(b.toString())).then(()=>{
        const helloFile = readFile("hello.txt")
        helloFile.then(b=>console.log(b.toString()))
    })

}
chaining()

// or using async await
//
async function chaining2(){
    const hugeFile = await readFile('huge.txt')
    console.log(hugeFile.toString())
    const helloFile = await readFile("hello.txt")
    console.log(helloFile.toString())
}
chaining2()