// const http = new Promise(
//     (res,rej)=>{
//         let cd = false;
//         if (cd) {
//             res('success');
//         }else{
//             rej('wrong')
//         }
// })

// http
// .then(a=>console.log(a))
// .catch(b=>console.log(b))

const ol = document.querySelector('ol');
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    let li = "";
    data.map(item=>{
        li+=`<li class="text-warning"><img width="100" src="${item.image}"/>${item.title}</li>`
    })
    ol.innerHTML = li;
})
.catch(err=>console.log(err))
