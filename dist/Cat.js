"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const Animal_1 = require("./Animal");
class Cat extends Animal_1.Animal {
    constructor(name) {
        super(name);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`แมวชื่อ : ${this.getName()}\nแมวร้อง : Meaww Meaww`);
    }
}
exports.Cat = Cat;
