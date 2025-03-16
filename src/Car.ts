import { ElectricVehicle } from "./ElectricVehicle";
import { Vehicle } from "./Vehicle";

export class Car extends Vehicle implements ElectricVehicle {
    chargeBattery():void{
        console.log("รถยนต์ไฟฟ้า");   
    }
}