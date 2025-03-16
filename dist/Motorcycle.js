"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorcycle = void 0;
const Vehicle_1 = require("./Vehicle");
class Motorcycle extends Vehicle_1.Vehicle {
    fly() {
        console.log("Airplane Mode");
    }
}
exports.Motorcycle = Motorcycle;
