// const arr=["one","two","three","four","five"]
// const newArr=["six","seven",...arr];
// console.log(newArr);

//Asynchronous 

const sayHi=()=>{
    console.log("It is sayHi function")
}
const sayHello=()=>{
    console.log("begining of the sayHello")    
    setTimeout(()=>{
        sayHi(); 
    },9000)
                  
console.log("End of the say Hello function");
}

sayHello();//function calling