import { Payment } from "./Payment";

export class CreditCardPayment implements Payment{
    private cardNumber : string;
    private limit : number;

    constructor(cardNumber:string,limit:number){
        this.cardNumber = cardNumber;
        this.limit = limit;
    }

    pay(card:string,amount: number): void {
        if(this.limit >= amount && card === this.cardNumber){
            this.limit -= amount;
            console.log("ชำระเงินสำเร็จ");
            return;
        }
        console.log("ชำระเงินไม่สำเร็จ");       
    }
}