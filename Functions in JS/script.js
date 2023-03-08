console.log("This is a JS")

function greet(name, greetText="Greetings from JS"){
    console.log(greetText + ", " + name)
    console.log(name + " is a good cat")
}

function sum(a, b, c){
    let d = a + b + c
    return d
    // Unreachable Code
    // console.log("This is written after return")
}

let name = "Bunny"
let name1 = "Pari"
let name2 = "Cookie"
let name3 = "Sandy"
let greetText = "Good Morning"

greet(name, greetText)
greet(name1, greetText)
greet(name2, greetText)
greet(name3, greetText)

let returnVal = sum(1,2,3)
console.log(returnVal)

// console.log(name + " is a good cat")
// console.log(name1 + " is a good cat")
// console.log(name2 + " is a good cat")
// console.log(name3 + " is a good cat")