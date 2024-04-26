class weapon{
    name: string;
    constructor(name:string){
        this.name=name
    }

    fire(){
        console.log("Friring weapon");
    }
}

class Bomb extends weapon{
    constructor(name:string){
        super(name)
    }

    fire(){
        console.log("Bomb making noise")
    }
}

const obj2 = new weapon("Army")
const obj = new Bomb("Nade");
obj.fire();
obj2.fire();

