"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalPayment = void 0;
class PayPalPayment {
    constructor(phoneNumber, limit) {
        this.phoneNumber = phoneNumber;
        this.limit = limit;
    }
    payment(phoneNumber, amount) {
        if (phoneNumber === this.phoneNumber) {
            this.pay(amount);
        }
    }
    pay(amount) {
        if (this.limit >= amount) {
            this.limit -= amount;
            console.log("ชำระเงินสำเร็จ");
            return;
        }
        console.log("ชำระเงินไม่สำเร็จ");
    }
}
exports.PayPalPayment = PayPalPayment;
