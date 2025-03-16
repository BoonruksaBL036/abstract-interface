"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    startEngin() {
        console.log("สตาร์ทเครื่องยนต์");
    }
    stopEngin() {
        console.log("ดับเครื่องยนต์");
    }
}
exports.Vehicle = Vehicle;
