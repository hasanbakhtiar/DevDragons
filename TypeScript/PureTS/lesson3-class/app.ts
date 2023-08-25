


class Car{
    protected mybrand:string;
    public myyear:number;
    public mystock:boolean;
    constructor(brand:string,year:number,stock:boolean){
            this.mybrand = brand;
            this.myyear = year;
            this.mystock = stock;
    }
}




const myCar = new Car("BMW",1990,true);

// console.log(myCar.mybrand);


class Moto extends Car{
    constructor(brand:string,year:number,stock:boolean){
        super(brand,year,stock);
    }
    calculate(){
        return this.mybrand;
    }
}
