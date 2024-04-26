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
var weapon = /** @class */ (function () {
    function weapon(name) {
        this.name = name;
    }
    weapon.prototype.fire = function () {
        console.log("Friring weapon");
    };
    return weapon;
}());
var Bomb = /** @class */ (function (_super) {
    __extends(Bomb, _super);
    function Bomb(name) {
        return _super.call(this, name) || this;
    }
    Bomb.prototype.fire = function () {
        console.log("Bomb making noise");
    };
    return Bomb;
}(weapon));
var obj2 = new weapon("Army");
var obj = new Bomb("Nade");
obj.fire();
obj2.fire();
