import { Animal } from "./Animal";

export class Dog extends Animal {
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
       console.log (`หมาชื่อ : ${this.getName()}\nหมาร้อง : Hong Hong`)
    }
}