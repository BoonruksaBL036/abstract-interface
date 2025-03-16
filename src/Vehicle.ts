export abstract class Vehicle {
    protected brand : string

    constructor(brand:string){
        this.brand = brand
    }

    startEngin():void {
        console.log("สตาร์ทเครื่องยนต์");        
    }

    stopEngin():void {
        console.log("ดับเครื่องยนต์");        
    }

}