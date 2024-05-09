console.log("1")
console.log("2")
console.log("3")

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 5000)
});


console.log("4")
console.log("5")
console.log("6")
p.then((data) => {
    console.log(data)
})
console.log("7")
console.log("8")
console.log("9")
console.log("10")



/*

The above code will print the following output:
1
2
3
4
5
6
7
8
9
10
Promise resolved

The code doen't wait for the promise to resolve. So when it encounters that the .then statement it checks is the promise is resolved or not. If it is resolved then it will execute the .then statement. If it is not resolved then it push the .then statement back the event loop and continue with the execution of the code.

when the the promise is resolved then the .then statement is executed and the output is printed.

Now let us assume that the promise is ready when the interpreter (JS Engine) is on line print (9). then it wouldn't stop the thing which it is doing to answer a callback. A callback is pushed onto a callback queue. the code from the queue is then sent to the execution stack, so the task at hand is completed first and then the callback is answered in accordance with callback queue

*/


// ------------------------------------------------------------------------------------
function doSomething()
{
    console.log("doing something")
}

// So essentially to write a async code in promises what you have to do is

//declare a promise or get one from somewhere like fetch
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 5000)// this is an API call that takes 5 seconds to resolve
});


//let us say we want to run some lines of code when this execution is completed, we cannot simply write the code here
doSomething();

// we have to write the code in the .then function
p2.then((response)=>{
    doSomething();
})


// ------------------------------------------------------------------------------------


//now let us say the promise 2 is resolved the we have to wait for prmoise 3 to resolve and when that happens in the perfect order then we execute the doSomething() func. In this case we have to chain the .then functions which is not a very intuitive way of coding.

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved")
    }, 3000) // this is an API call that takes 3 seconds to resolve
});

p2.then((response) => {
    console.log(response);
    return p3;
}).then((response) => {
    console.log(response);
    doSomething();
});