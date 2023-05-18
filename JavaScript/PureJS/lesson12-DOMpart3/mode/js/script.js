const modeBtn = document.querySelector('#mode');
const nav = document.querySelector('nav');
const conMode = document.querySelector('#con-mode');


modeBtn.onclick = ()=>{
    if (modeBtn.innerHTML ==='Dark') {
        // nav.attributes[0].value = 'navbar navbar-expand-lg bg-dark navbar-dark';
        modeBtn.innerHTML ='Light'
        conMode.attributes[1].value = 'dark'
    }else{
        // nav.attributes[0].value = 'navbar navbar-expand-lg bg-light navbar-light'
        modeBtn.innerHTML ='Dark'
        conMode.attributes[1].value = 'light'

    }
}