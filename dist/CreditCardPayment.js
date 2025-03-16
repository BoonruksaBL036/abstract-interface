"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
class CreditCardPayment {
    constructor(cardNumber, limit) {
        this.cardNumber = cardNumber;
        this.limit = limit;
    }
    pay(card, amount) {
        if (this.limit >= amount && card === this.cardNumber) {
            this.limit -= amount;
            console.log("ชำระเงินสำเร็จ");
            return;
        }
        console.log("ชำระเงินไม่สำเร็จ");
    }
}
exports.CreditCardPayment = CreditCardPayment;
