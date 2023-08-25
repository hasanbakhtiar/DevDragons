var info = "hello";
console.log(info);
function infoFunc(a, b) {
    if (a === void 0) { a = 100; }
    var c = a + b;
    function comingData(mydata) {
        return mydata;
    }
    console.log(comingData(c));
}
infoFunc(10, 20);
