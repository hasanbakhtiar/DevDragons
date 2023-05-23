// const text = document.querySelector('p');
// const btn = document.querySelector('button');

// btn.onclick =()=>{
//     // text.classList.add('text-primary') //class elave edir
//     // text.classList.remove('text-primary'); //class silmek ucundur
//     // text.classList.toggle('text-primary'); //class verir ve silir
//     // text.className = "text-danger bg-dark" //classi deyismek ucundur

// }


const nav  = document.querySelector('nav');
const modeBtn = document.querySelector('#mode-btn');

if (localStorage.getItem('mode') === null) {
    localStorage.setItem('mode','light')
}else{
    modeBtn.onclick=()=>{
       if (modeBtn.innerHTML === "Dark") {
        nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark';
        modeBtn.innerHTML = 'Light';
        localStorage.setItem('mode','dark')
       }else{
        nav.className = 'navbar navbar-expand-lg bg-light navbar-light';
        modeBtn.innerHTML = 'Dark';
        localStorage.setItem('mode','light')
       }
    }
}


// default deyerleri verme ucun
if (localStorage.getItem('mode') === 'light') {
    nav.className = 'navbar navbar-expand-lg bg-light navbar-light';
    modeBtn.innerHTML = 'Dark';
}else{
    nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark';
    modeBtn.innerHTML = 'Light';
}




// localStorage.setItem(); //localstorage'e melumat gondermek ucun
// localStorage.getItem(); //localstorage'den melumat almaq ucun
// localStorage.removeItem(); //localstorage'den melumati tek-tek silmek ucun
// localStorage.clear();//localstorage'den butun melumatlari bir basa silmek ucun


// const text = document.querySelector('h1');
// text.innerHTML = localStorage.getItem('title')




