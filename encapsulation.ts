class person{
    private name: string;
    constructor(name:string){
        this.name=name;
        console.log("creating object...")
    }
    getName(){
        return this.name;
    }
    setName(name: string){
        this.name = name;
    }
}

const mayur = new person("Test");
mayur.setName("mayur");
console.log(mayur.getName());