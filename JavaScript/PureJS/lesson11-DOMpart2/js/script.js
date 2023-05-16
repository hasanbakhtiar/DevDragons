// const myLi = document.getElementsByTagName('li');
// for(let c = 0; c<myLi.length; c++){
//     myLi[c].innerHTML = "Bye";
// }
// document.getElementsByClassName('test')[0].innerHTML = 'bye';
// document.getElementById('demo').innerHTML = 'memo';


// ===================================================================


// document.querySelector('ul .test > span').innerHTML = 'test';

// for(let i=0; i<14;i++){
//     document.querySelectorAll('li')[i].innerHTML = 'test';
// }

// import { products } from "../data/products.js";

// const text = document.querySelectorAll('li');

// products.map((item,c)=>{
//     text[c].innerHTML = item.title;
// })


// const btn = document.querySelector('button');
// const text = document.querySelector('h1');


// const city = ()=>{
//     if (text.innerHTML == 'England') {
//         text.innerHTML = 'London';
//     }else{
//         text.innerHTML = 'England';
//     }
// }

// btn.onclick=city;



const lang = {
    az:["Ana Sehife",'Haqqimizda','Xidmetlerimiz','Əlaqə'],
    en:["Home",'About','Services','Contact']
}

const langBtn = document.querySelector('#lang');
const navLink = document.querySelectorAll('.nav-link');

langBtn.onclick=()=>{
    for(let i in lang.az){
        navLink[i].innerHTML = lang.az[i];
    }

}








