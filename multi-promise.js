
const { readFile } = require('fs/promises');

async function readFileAsString(path){
    const file = await readFile(path)
    return file.toString()
}


async function readFiles(){
    // All async functions return a PROMISE IMPLICITLY
    // you must await them if you want your code to execute in a predicatable order
    const data1 = await readFileAsString("huge.txt")
    const data2 = await readFileAsString("hello.txt")
    console.log(data1)
    console.log(data2)
}
readFiles()

