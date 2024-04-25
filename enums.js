var myEmp;
(function (myEmp) {
    myEmp[myEmp["Mayur"] = 0] = "Mayur";
    myEmp[myEmp["Akshay"] = 1] = "Akshay";
    myEmp[myEmp["Suyash"] = 2] = "Suyash";
    myEmp[myEmp["Om"] = 3] = "Om";
})(myEmp || (myEmp = {}));
console.log(myEmp.Mayur);
var mySalary;
(function (mySalary) {
    mySalary[mySalary["Mayur"] = 41000] = "Mayur";
    mySalary[mySalary["Akshay"] = 55000] = "Akshay";
    mySalary[mySalary["Suyash"] = 55555] = "Suyash";
    mySalary[mySalary["Om"] = 555555] = "Om";
})(mySalary || (mySalary = {}));
console.log(mySalary.Mayur);
