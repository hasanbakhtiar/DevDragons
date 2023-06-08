const btn = document.querySelectorAll('button');
const row = document.querySelector('.row');

const fetchApi = (start=0, end) => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            let card = "";
            data.slice(start, end).map((item, i) => {
                card += `
            <div class="col-12 col-sm-12 col-md-4">
                  <div class="card">
                    <img src="${item.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.name.common}</h5>
                        
                        <p class="card-text">${item.capital}</p>
                        <p class="card-text">${start+i+1}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
            </div>
            `
            })
            row.innerHTML = card;
        })
}

btn[0].onclick = () => {
    fetchApi(0, 50)

}

btn[1].onclick = () => {
    fetchApi(50, 100)

}

btn[2].onclick = () => {
    fetchApi(100, 150)

}


btn[3].onclick = () => {
    fetchApi(150, 200)

}


btn[4].onclick = () => {
    fetchApi(200, 250)

}


fetchApi()