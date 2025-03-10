"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./Animal");
class Dog extends Animal_1.Animal {
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
        console.log(`หมาชื่อ : ${this.getName()}\nหมาร้อง : Hong Hong`);
    }
}
exports.Dog = Dog;
