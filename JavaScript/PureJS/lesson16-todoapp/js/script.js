// const addBtn = document.querySelector('button');
// const todoInput = document.querySelector('.form-control');
// const todoList = document.querySelector('.list-group');
// const alert = document.querySelector('#alert');
// const clearArea = document.querySelector('.clear-area');
// let countText = document.querySelector('.count');


// addBtn.onclick = () => {
//     if (!todoInput.value) {
//         alert.innerHTML = 'please, fill input';
//         alert.className = 'alert alert-warning';
//     } else {
//         const span = document.createElement('span');
//         span.innerHTML = `<input disabled  class="item-input" value="${todoInput.value}" /><div><button  class="edit btn btn-primary me-2"><i class="fa-solid fa-pen-to-square"></i></button><button  class="del btn btn-danger">X</button></div>`;
//         span.setAttribute('class', 'list-group-item list-group-item-action d-flex justify-content-between');
//         todoList.appendChild(span);
//         todoInput.value = null;
//         let todoItem = document.querySelectorAll('span');


//         if (todoItem.length > 1) {
//             document.querySelector("#allclear").style.display = "block";
//         }

//         for (let i = 0; i < todoItem.length; i++) {
//             document.querySelectorAll('.del')[i].onclick = () => {
//                 todoItem[i].remove();

//                 if (todoItem.length < 1) {
//                     document.querySelector("#allclear").style.display = "none";
//                 }
//             }
//         }

//         for (let i = 0; i < todoItem.length; i++) {
            
//           document.querySelectorAll('.edit')[i].onclick =()=>{
//             if (document.querySelectorAll('i')[i].className === 'fa-solid fa-pen-to-square') {
//                 document.querySelectorAll('.item-input')[i].removeAttribute('disabled');
//                 document.querySelectorAll('i')[i].className = 'fa-solid fa-check'
//             }else{
//                 document.querySelectorAll('i')[i].className = 'fa-solid fa-pen-to-square'
//                 document.querySelectorAll('.item-input')[i].setAttribute('disabled',"");
//             }
//           }  
//         }

//     }
// }

// document.querySelector('#allclear').onclick = () => {
//     const span = document.querySelectorAll('span');
//     for (let c = 0; c < span.length; c++) {
//         span[c].remove();

//     }
//     document.querySelector("#allclear").style.display = "none";
// }



// const info = document.querySelector('.info');
// const data = [
//     {
//         title:"pen"
//     },
//     {
//         title:"pencil"
//     },
//     {
//         title:"ruler"
//     }
// ]

// const convertData = JSON.stringify(data);

// localStorage.setItem('data',convertData);
// const comingData = JSON.parse(localStorage.getItem('data'));

// let li = "";
// comingData.map(item=>{
//     li+=`<li>${item.title}</li>`;
// }) 


// info.innerHTML = li;



const ol = document.querySelector('ol');
const input = document.querySelector('input');
const form = document.querySelector('form');


let data= [];
let li = "";
form.onsubmit = e =>{
    e.preventDefault();
    data.push(input.value);
    localStorage.setItem('todo',JSON.stringify(data));
    // let comingData = JSON.parse(localStorage.getItem('todo'));
    let comingData = JSON.parse(localStorage.getItem('todo'));
    
    
    for(let a of comingData){
        if (a === input.value) {
            li+=`<input value="${a}"/><br>`
            break;
        }
    }
    ol.innerHTML = li;  
    input.value = "";   
}

let comingData = JSON.parse(localStorage.getItem('todo'));


comingData.map(item=>{
    console.log(item);
    li+=`<input value="${item}"/><br>`
})
ol.innerHTML = li;