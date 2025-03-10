export abstract class Animal {
    protected name : string
    constructor(name:string){
        this.name = name
    }
    abstract makeSound():void;
    abstract getName():string;
    abstract setName(name:string):void;
}