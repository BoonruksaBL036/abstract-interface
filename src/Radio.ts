import { Device } from "./Device";

export class Radio implements Device{
    turnOn(): void {
        console.log("เปิดวิทยุ"); 
    }

    turnOff(): void {
        console.log("ปิดวิทยุ");
    }
}