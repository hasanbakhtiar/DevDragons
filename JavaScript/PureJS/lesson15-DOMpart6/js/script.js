// const ol = document.querySelector('ol');
// const info = document.querySelector('.info');

// info.innerHTML = ol.childNodes[1].firstChild.parentNode.parentNode.lastChild.firstChild.nodeValue;
// info.innerHTML = ol.childNodes[1].nextSibling.firstChild.nodeValue;



// const myNewP = document.createElement('p');
// const myNewText = document.createTextNode('Hello, My New Element');
// myNewP.appendChild(myNewText);
// console.log(myNewP);

// document.body.appendChild(myNewP);





// const input = document.querySelector('input');
// const btn = document.querySelector('button');
// const ol = document.querySelector('ol');
// btn.onclick = () => {
//     if (!input.value) {
//         alert('please,fill input')
//     } else {
//         const li = document.createElement('li');
//         li.innerHTML = input.value;
//         ol.appendChild(li);
//         input.value = null;
//         li.onclick=()=>{
//             if (li.style.textDecoration === 'none') {
//                 li.style.textDecoration = 'line-through';
//             }else{
//                 li.style.textDecoration = 'none';
//             }
//         }
//         li.ondblclick=()=>{
//             li.remove();
//         }
//     }
// }



// ============================================New Todo App========================================


const addBtn = document.querySelector('button');
const todoInput = document.querySelector('.form-control');
const todoList = document.querySelector('.list-group');
const alert = document.querySelector('#alert');

addBtn.onclick = () => {
    if (!todoInput.value) {
        alert.innerHTML = 'please, fill input';
        alert.className = 'alert alert-warning';
    }else{
        const span = document.createElement('span');
        span.innerHTML = todoInput.value;
        span.setAttribute('class','list-group-item list-group-item-action');
        todoList.appendChild(span);
        todoInput.value = null;
    }
}


