import { Payment } from "./Payment";

export class PayPalPayment implements Payment{
    private phoneNumber : string;
    private limit : number;
    constructor(phoneNumber:string,limit:number){
        this.phoneNumber = phoneNumber
        this.limit = limit
    }

    

    pay(phone:string,amount: number): void {
        if(this.limit >= amount && phone === this.phoneNumber){
            this.limit -= amount;
            console.log("ชำระเงินสำเร็จ");
            return;
        }
        console.log("ชำระเงินไม่สำเร็จ");       
    }
} 