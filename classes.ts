class Animal{
    name : String;
    constructor(x:string){
        this.name = x;
    }

    makesound(){
        console.log("Making sound by "+this.name)
    }
}

//creating object for class Animal
const cat = new Animal("Mickey");
cat.makesound();