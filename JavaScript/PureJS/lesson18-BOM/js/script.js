const span = document.querySelector('span');

// console.log(window);
// span.innerHTML = window.screen.availHeight;
// span.innerHTML = window.innerWidth;

const btn = document.querySelector('button');
const text = document.querySelector('p');
let a = 1;
btn.onclick = () => {
    // if (window.innerWidth < 600) {
    //         text.innerHTML = 'you in phone'
    // }else{
    //     text.innerHTML = 'you in desktop'
    // }
    // history.forward();
    // history.back();
    // 1000ms = 1s
    setTimeout(() => {
        window.open('http://google.com', "", "width=300px,height=300px");
        window.open('http://w3schools.com', "", "width=300px,height=300px");
        a += 1;
        span.innerHTML = a;
    }, 500)


}





// span.innerHTML = window.location.href