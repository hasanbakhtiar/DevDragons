// const product = ['table','chair','sofa'];
// console.log(product[2]);

// const product = new Array('table','chair','sofa');
// console.log(product);

// const product = [];
// product[0] = 'table';
// product[1] = 'bed';
// product[2] = 5;
// console.log(product);

// const product = ['table','chair','sofa'];
// product[1] = 'updated';
// console.log(product);


// const product = ['table','chair','sofa'];
// product[3] = 'new product';
// product['mykey'] = 'new value';

// console.log(product['mykey']);



// const product = ['table','chair',[1,2,[true,['hello','data','info',['call me']]],3,4],'sofa'];
// console.log(product[2][2][1][3][0]);

// const product = ['table','chair','sofa'];

// product.push('new value');
// product.pop();
// product.shift();
// product.unshift('new value');
// console.log(product);

// const productOne = ['table','chair','sofa'];
// const productTwo =  ['milk','egg'];
// const totalProduct = productOne.concat(productTwo);
// console.log(totalProduct);
// console.log(productOne,productTwo);

// console.log(product[0].length);


// const productOne = ['table','chair','sofa'];
// console.log(productOne.slice(0,2));
// console.log(console);
// productOne.splice(1,1,"test",'hello');
// console.log(productOne);

// console.log(productOne.join(" | "));
// console.log(productOne.sort());
// console.log(productOne.reverse());
// const info = productOne.sort();
// console.log(info.reverse());

// debugger;        
// "use strict";


// let a = 5;
// console.log(a);



// const data = "Hello";
// console.log(data.substring(0,1));

// console.log("Hello1");
// console.log("Hello2");
// console.log("Hello3");
// console.log("Hello4");
// console.log("Hello5");






const infoPartOne = ['a','b','c',[1,2,3,['1a','2a','3a','4a','5a'],4,5],'d','e'];
const infoPartTwo = ['f','g','h',[6,7,8,['1b','2b','3b','4b','5b'],9,10],'i','n'];


// part one start
const letterAndNumberPartOne = infoPartOne[3][3];
const letterAndNumberPartTwo = infoPartTwo[3][3];
const totalLetterAndNumber = letterAndNumberPartOne.concat(letterAndNumberPartTwo);
console.log(totalLetterAndNumber);
// part one end

// part two start
const onlyNumberPartOne = infoPartOne[3].slice(0,3).concat(infoPartOne[3].slice(4,6));
const onlyNumberPartTwo = infoPartTwo[3].slice(0,3).concat(infoPartTwo[3].slice(4,6));
const totalOnlyNumber = onlyNumberPartOne.concat(onlyNumberPartTwo);
console.log(totalOnlyNumber);

// part two end


















