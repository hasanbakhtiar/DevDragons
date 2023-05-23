const input = document.querySelector('input');
const btn = document.querySelector('button');
const alert = document.querySelector('#alert');

const accountEmail = 'user@exmaple.com';



btn.onclick = ()=>{
   if (!input.value) {
    alert.innerHTML = "plase,fill input";
    alert.className = 'alert alert-warning';
   }else{
    if (accountEmail === input.value) {
        alert.innerHTML = "code send to email";
        alert.className = 'alert alert-success';
        input.value = "";
    }else{
        alert.innerHTML = "this email is wrong";
        alert.className = 'alert alert-danger';
    }
   }
}