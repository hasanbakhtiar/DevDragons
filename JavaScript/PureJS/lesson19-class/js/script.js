// function Human(a){
//    this.device = a;
 
// }
// const myHuman = new Human('phone1');

// console.log(myHuman);



// class Car{
//     constructor(inBrand,inColor,inYear){
//         this.brand = inBrand;
//         this.color = inColor;
//         if (inYear<2023) {
//             this.year =  'This car is old'
//         }else{
//             this.year = 'this car is new'
//         }
//     }

//     information(km,hour){
//         return `My car name:${this.brand}, color:${this.color}, ${this.year} | car speed:${km/hour}km/h`
//     }
// }

// const myCar = new Car("BMW","black",2022);
// console.log(myCar.information(100,0.5));



// class Moto extends Car{
//     constructor(inBrand,inColor,inYear){
//         super(inBrand,inColor,inYear);
//     }
// }
// const myMoto = new Moto("Yamaha","yellow",2023);
// console.log(myMoto.information(300,0.5));


setInterval(()=>{
    document.querySelector('p').innerHTML = new Date();

},1000)

