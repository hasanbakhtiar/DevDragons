// function name(params){
//     code 
// }


// function info(){
//     console.log('Hello function');
// }

// info();

// function info(a,b,c){
//     console.log("my result:"+(a+b));
//     console.log(c+a);
// }
// info(5,10,5);
// info(25,20,6);
// info(300,90,9);
// NaN ->Not a Number

// function info(a=10,b=20,c=30){
//    console.log(a,b,c);
// }
// info(undefined,30,40);

// IIFE function

// (function(){
//     console.log("Hello");
// })()


// Function Declaration
// function info(){
//     console.log('my new function');
// }
// info();

// Function Expression
// const info = function(){
//     console.log('my function');
// }
// info();



// function info(){}

// Arrow function
// ()=>{} 

// const info = ()=>{
//     console.log('my arrow function');
// }
// info();



// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();


// const checkSpeed=(totalSpeed,cardata)=>{
//     if (totalSpeed > 140) {
//         return `car:${cardata} -> penalty `
//     }else{
//         return 'no problem'
//     }
// }




// const carData = (brand,model,color)=>{

//     const calculateSpeed=(km,h)=>{
//             // return `${(km/h).toFixed()}km/h`;
//             const total = km/h;
//             const carinfo = [brand,model,color]
//             return checkSpeed(total,carinfo);
//     }

//     console.log(calculateSpeed(1000,3));
    
    
//     return `Brand:${brand}   Model:${model}   Color:${color}`
// }

// console.log(carData("BMW","x5","black",));








