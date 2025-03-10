"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Color_1 = require("./Color");
class Rectangle extends Color_1.Color {
    constructor(width, height) {
        super("red", false);
        this.width = width;
        this.height = height;
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
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
    getDetails() {
        return `รูปสี่เหลี่ยมผืนผ้าขนาด ${this.width} x ${this.height} ซม.`;
    }
}
exports.Rectangle = Rectangle;
