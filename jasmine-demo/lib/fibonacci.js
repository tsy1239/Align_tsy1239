// const fibonacci = (n)=> {
//     return 1;
// }

// module.exports = fibonacci
function fibonacci(n){
    // if(n <= 1)
    //     return 1
    // else
    //     return fibonacci(n-1)+fibonacci(n-2);
    if(n >= 3) 
        return fibonacci(n-1)+fibonacci(n-2);
    return 1;
}
module.exports = fibonacci