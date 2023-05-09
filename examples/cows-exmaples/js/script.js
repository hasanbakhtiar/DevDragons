const farmerIncome = (dayspassed)=>{
    const cowPrice = 300;
    const milkPrice = 3;
    const milkLitrPerDay = 3;
    
    let cowsNumber = 1;
    let income = 0;

    for(let i=1; i<=dayspassed;i++){
        income += milkLitrPerDay * cowsNumber *milkPrice;

        for (let a = 0; a < dayspassed; a++) {
            if (income>=300) {
                income-=cowPrice
                cowsNumber++
            }
        }

    }
    console.log(income);
    console.log(cowsNumber);
}
farmerIncome(134);

