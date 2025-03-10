import { Animal } from "./Animal";

export class Cat extends Animal{
    constructor(name:string){
        super(name)
    }

    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name
    }

    makeSound(): void {
       console.log (`แมวชื่อ : ${this.getName()}\nแมวร้อง : Meaww Meaww`)
    }
}