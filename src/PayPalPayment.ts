import { Payment } from "./Payment";

export class PayPalPayment implements Payment{
    private phoneNumber : string;
    private limit : number;
    constructor(phoneNumber:string,limit:number){
        this.phoneNumber = phoneNumber
        this.limit = limit
    }

    payment(phoneNumber:string,amount:number):void{
        if(phoneNumber === this.phoneNumber){
            this.pay(amount)
        }
    }

    pay(amount: number): void {
        if(this.limit >= amount){
            this.limit -= amount;
            console.log("ชำระเงินสำเร็จ");
            return;
        }
        console.log("ชำระเงินไม่สำเร็จ");       
    }
} 