
// destructing is alternate syntax to break the return of a function into variables quickly

function stats(nums = [0]){

    const mean = nums.reduce((a,b)=>a+b)/nums.length
    const min = nums.sort()[0]
    const max = nums.sort()[nums.length-1]
    return [min,max,mean]
}
const numbers = [1,2,3,4,5,6]

// Array Destructing
const [min,max,mean] = stats(numbers)

// Equivalent to
// const values = stats(numbers)
// const min = values[0]
// const max = values[1]
// const mean = values[2]

console.log(min)
console.log(max)
console.log(mean)

function wordAnalyzer(word = ''){
    const length = word.length
    const vowels = [...word].filter(c=>"AEIOU".includes(c.toUpperCase())).length
    return {length,vowels}
}

// Object Destructing. The order of left hand assignments do not matter but names must match
const {vowels,length} = wordAnalyzer("Bobby Smith")
console.log(length)
console.log(vowels)