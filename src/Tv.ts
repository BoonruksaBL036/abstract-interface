import { Device } from "./Device";

export class Tv implements Device{
    turnOn(): void {
        console.log("เปิดทีวี"); 
    }

    turnOff(): void {
        console.log("ปิดทีวี");
    }
}