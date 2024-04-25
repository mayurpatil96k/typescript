function sub(a,b){
    return new Promise((res,rej)=>{
        if(isNaN(a)||isNaN(b)){
            rej("Invalid input");
        }
        res(a-b);
    })
}

// console.log(sub(50,10));
console.log(sub("Shubham","Mayur"));