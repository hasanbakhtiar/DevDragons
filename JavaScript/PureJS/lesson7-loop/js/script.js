// while 
// while(condition){
// action
// result
// }


// let count = 500;

// while(count>=0){
//     console.log(count);
//     count--;
// }


// let count = 5;

// do{
//     console.log(count);
//     count++
// }while(count>10);

// for (let count = 0; count < 10; count++) {
//     if (count === 6) {
//         break
//     }
//     document.write('<h1 style="color:red">hey im developer</h1> <br>')
// }



//         const info = ['table','chair','sofa'];
// for(let count = 0;count<3;count++){
//     console.log(info[count]);
//     console.log(count);
// }




// const info = ['table','chair','sofa'];
// for(let count = 0;count<info.length;count++){
//     console.log(info[count]);
//     console.log(count);
// }


// const info = ['table','chair','sofa','test','new'];

// for(let c in info){
//     console.log(info[c]);
// }


// const info = ['table','chair','sofa','test','new'];

// for(let item of info){
//     console.log(item);
// }






// const products = {
//     title:"Tomato",
//     price:5.20,
// color:"black",
//     stock:true
// }

// console.log(products.title);

// const phoneProducts = [
//     {
//         title:"Samsung S23",
//         price:2300,
//         color:"yellow",
//         stock:true
//     },
//     {
//         title:"Samsung A20",
//         price:300,
//         color:"black",
//         stock:false
//     },
//     {
//         title:"IPhone 14",
//         price:2000,
//         color:"red",
//         stock:true
//     },
//     {
//         title:"Xiaomi 13 pro",
//         price:3300,
//         color:"green",
//         stock:true
//     }
// ]


// const data = [];



// for(let items of phoneProducts){
//    if (items.stock) {
//     data.push(items.title)
//    }
// }
// data.pop()

// for(let i of data){
//     console.log(i);
// }


const car = [
    {
        brand:"BMW",
        model:"X5",
        year:2023,
        newCar:true
    },
    {
        brand:"Mercedes",
        model:"S500",
        year:2022,
        newCar:false
    },
    {
        brand:"BMW",
        model:"X6",
        year:2020,
        newCar:false
    },
    {
        brand:"BMW",
        model:"X7",
        year:2023,
        newCar:true
    },
    {
        brand:"BMW",
        model:"X3",
        year:2023,
        newCar:true
    }
]

const carData = [];

for(let i of car){
    if (i.newCar) {
        carData.push(i.brand+i.model)
    }
}


const randomData = Math.random()*2;

console.log(randomData.toFixed());


console.log(carData[Number(randomData.toFixed())]);

// console.log(typeof randomData.toFixed());
