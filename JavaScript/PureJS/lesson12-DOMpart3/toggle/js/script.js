const menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    document.querySelector('h1').style.backgroundColor = 'red';
    document.querySelector('menu').style.transform = "translateX(0px)";
}

document.querySelector('#test').onclick = () => {
    if (document.querySelector('.box').style.height === "0px") {
        document.querySelector('.box').style.height = "400px";
    }else{

        document.querySelector('.box').style.height = "0px";
    }
}

