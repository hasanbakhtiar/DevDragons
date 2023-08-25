const info:string = "hello";
console.log(info);


function infoFunc(a:number=100,b:number):void{
    let c:number =  a+b;
    function comingData(mydata:number){
        return mydata;
    }
    console.log(comingData(c));
}

infoFunc(10,20);
