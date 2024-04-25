var Animal = /** @class */ (function () {
    function Animal(x) {
        this.name = x;
    }
    Animal.prototype.makesound = function () {
        console.log("Making sound by " + this.name);
    };
    return Animal;
}());
var cat = new Animal("Mickey");
cat.makesound();
