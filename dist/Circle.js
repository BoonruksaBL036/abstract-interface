"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Color_1 = require("./Color");
class Circle extends Color_1.Color {
    constructor(radius) {
        super("blue", false);
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFiled() {
        return this.filed;
    }
    setFiled(filed) {
        this.filed = filed;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2 * (Math.PI * this.radius);
    }
    getDetails() {
        return `รูปวงกลมขนาด ${this.radius} ซม.`;
    }
}
exports.Circle = Circle;
