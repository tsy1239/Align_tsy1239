// console.log(fibonacci(1));
// console.log("Hello world!");

// var name = '小明';
// var age = 20;
// var message = `你好, ${name}, 你今年${age}岁了!`;
// console.log(message);

// function isLeapYear(year){
//     if (year % 400 === 0){
//         return true;
//     }

//     if ( year % 100 == 0){
//         return false;
//     }

//     if (year % 4 === 0 ){
//         return true;
//     }
//     return false;
// }

// console.log("2000:"+isLeapYear(2000));
// console.log("1990:"+isLeapYear(1990));


// const fibonacci = require('./lib/fibonacci')
// for (var i=0;i<20;i++){
//     console.log(fibonacci(i));
// }

// var s = 'hello,world';
// console.log(s.substring(0,5));
// console.log(s.indexOf('hello'));


// var a = process.argv.splice(2);
// console.log(a.length);

function drop(str,n){
    var result = ""
    for(var i = 0; i < str.length; i++ ){
        if(i === n ){
            continue       
        }  
        result = result + str[i]    
    }   
    return result
}

console.log(drop("abc",0))