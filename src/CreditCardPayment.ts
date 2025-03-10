import { Payment } from "./Payment";

export class CreditCardPayment implements Payment{
    private cardNumber : string;
    private limit : number;

    constructor(cardNumber:string,limit:number){
        this.cardNumber = cardNumber;
        this.limit = limit;
    }

    payment(cardNumber:string,amount:number):void{
        if(cardNumber === this.cardNumber){
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