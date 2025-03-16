import { Flyable } from "./Flyable";
import { Vehicle } from "./Vehicle";

export class Motorcycle  extends Vehicle implements Flyable {
    fly():void{
        console.log("Airplane Mode");
    }
}