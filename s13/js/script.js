// variable

// console.log(x)

// let x = 10
// x= "marwa"
// x = 10.5
// x = true
// x= null

// const y = 5

// y=3

// var x = 10
// var x = 5

// let z = 5

// z =10

// let x = []
// console.log(typeof x)


// operators assignment operator
// let x = 10
// x += 5  // x = x + 5

// mathmatical operators   * / - + **  %   () 
// let sec = 10000000

// let min = parseInt(sec / 60)
// sec %= 60

// let hours = parseInt(min /60)
// min %= 60

// let days = parseInt(hours /24)
// hours %= 24

// let mon = parseInt(days/30)
// days %= 30

// console.log(mon, days, hours, min, sec)

// conditional operators
// > >= < <= != == === !==

// let x = 5 , y = "5"
// console.log( x === y )
//  console.log( typeof y )
// y = y * 1
//  console.log( y ,typeof y ) //Nan

// logical operators
// and or !


// ternery operator
// let a = 5, b = "5"
// a == b ? console.log("equals") : console.log("l2 msh besawo b3d")
// let z 
// a == b ? z="equals" : z="not equals"


// alert("hello")
// let c = prompt("enter data")
// document.write("test")
// let f = c * 9 / 5  + 32

// document.writeln(f)


// let f = prompt("enter f")
// let c = ( f - 32 ) * 5 / 9

// document.writeln(c)

let convertType = prompt("enter your temp type")
let temp = prompt("temp val")
convertType == "F" || convertType == "f" ? 
    document.writeln(( temp - 32 ) * 5 / 9) 
    : 
    document.writeln( temp * 9 / 5  + 32 )