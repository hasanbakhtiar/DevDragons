var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, year, stock) {
        this.mybrand = brand;
        this.myyear = year;
        this.mystock = stock;
    }
    return Car;
}());
var myCar = new Car("BMW", 1990, true);
// console.log(myCar.mybrand);
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(brand, year, stock) {
        return _super.call(this, brand, year, stock) || this;
    }
    Moto.prototype.calculate = function () {
        return this.mybrand;
    };
    return Moto;
}(Car));
