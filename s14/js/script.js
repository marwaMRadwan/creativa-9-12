// m M Meter meter - cm CM Cm cM
// let heightType = prompt("enter your Type cm - m")
// let userHeight = prompt("enter your h")
// let bmi
// if(heightType== "m" || heightType == "M" || heightType == "Meter" || heightType=="meter"){
//     bmi = userHeight **2 
//     console.log(bmi)
// }
// else if( heightType == "cm" || heightType == "CM" || heightType=="Cm")
//     bmi = userHeight ** 3
// else
//     console.log("invalid choice")


// let mType = prompt("--")
// switch(mType){
//     case "1": alert(1) ; break // if(mType===1)
//     case "2": alert(2); break
//     default: alert("invalid")
// }

//loops
//while
// let x = 10
// while(x > 10){
//     console.log(x)
//     x--
// }
//do while
// let z = 10
// do{
//     console.log(z)
// } while (z>10)

// let menu = "1- customer service 2- call center 3- payments 0-exit"
// let ch = +prompt("enter your choice 1- customer service 2- call center 3- payments 0-exit")
// while(ch !== 0){
//     ch = +prompt("enter your choice 1- customer service 2- call center 3- payments 0-exit")
// }
// let ch  // undefined
//  while(ch != 0){
//     ch = +prompt("enter your choice 1- customer service 2- call center 3- payments 0-exit")
// }
// do{
//     ch = +prompt("enter your choice 1- customer service 2- call center 3- payments 0-exit")
// }
// while (ch!=0)
//for

// for(let i=1; i<10; i++){
//     console.log(i);   
// }

// let i
// while(true){
//     i= prompt("--")
//     if(i==0) break
// }

// for(;;){

// }

// for(let i=1; i<=10; i++){
//     console.log("------")
//     if(i==5 || i == 7) continue
//     console.log(i)
// }

// for(let start = 1; start<=20 ; start++){
//     console.log(start)
// }

// let start = 1
// while(start<=20){
//     console.log(start)
//     start++
// }
// let x = +prompt("x")
// while(true){
//     if(x > 30) continue
//     x = +prompt("--")
// }

// 1 * 1 = 1


// 12 * 12 = 144

// for(let i=1; i<=12; i++){
//     document.writeln("table " + i )
//     document.writeln("\n")
//     for(let j =1 ; j<=12; j++)
//         document.writeln(j + " * " + i + " = " + j * i + '\n')
// }

let i = 1
while(i<=12){
    document.writeln("table " + i + "<br>")
    let j = 1
    while(j<=12){
        document.writeln(j + " * " + i + " = " + j * i + '<br>')
        j++
    }
    i++
}
