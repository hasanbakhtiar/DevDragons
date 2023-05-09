// import { products,a } from "../data/products.js";
import * as myprod from "../data/products.js";

// for (let index = 0; index < myprod.products.length; index++) {
//     console.log(myprod.products[index]);
    
// }

// console.log(myprod.a);



// myprod.products.map((item,count)=>{
//         console.log(count);
// })



const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let a = person.fullName.bind(member);

  console.log(a());
  
  console.log(person.fullName());