type name= string;
type age = number;
type employee = {
    empName :name,
    empAge :age
}

const Name:name="Mayur";
const Age:age=22;
const emp={
    empName :Name,
    empAge: Age
}

console.log(emp);
console.log(emp.empAge);
console.log(emp.empName)