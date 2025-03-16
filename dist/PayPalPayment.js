"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalPayment = void 0;
class PayPalPayment {
    constructor(phoneNumber, limit) {
        this.phoneNumber = phoneNumber;
        this.limit = limit;
    }
    pay(phone, amount) {
        if (this.limit >= amount && phone === this.phoneNumber) {
            this.limit -= amount;
            console.log("ชำระเงินสำเร็จ");
            return;
        }
        console.log("ชำระเงินไม่สำเร็จ");
    }
}
exports.PayPalPayment = PayPalPayment;
