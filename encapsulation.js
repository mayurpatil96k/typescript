var person = /** @class */ (function () {
    function person() {
        console.log("creating object...");
    }
    person.prototype.getName = function () {
        return this.name;
    };
    person.prototype.setName = function (name) {
        this.name = name;
    };
    return person;
}());
var mayur = new person();
mayur.setName("mayur");
console.log(mayur.getName());
