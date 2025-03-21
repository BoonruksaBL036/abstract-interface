import { Car } from './Car';
import { Radio } from './Radio';
import { Cat } from "./Cat";
import { Circle } from "./Circle";
import { Dog } from "./Dog";
import { Employee } from "./Employee";
import { FullTimeEmployee } from "./FullTimeEmployee";
import { PartTimeEmployee } from "./PartTimeEmployee";
import { Rectangle } from "./Rectangle";
import { Tv } from "./Tv";
import { CreditCardPayment } from './CreditCardPayment';
import { Motorcycle } from './Motorcycle';
const emp1 = new FullTimeEmployee("Boonruksa",30000);
console.log(emp1.getDetails());
console.log(`Fulltime bonus: ${emp1.calculateBonus()}บาท`);

const emp2 = new PartTimeEmployee("wisarut",10000)
console.log(emp2.getDetails());
console.log(`Fulltime bonus: ${emp2.calculateBonus()}บาท`);

console.log("############ Rectangle #############");
const rec1 = new Rectangle(10,20);
console.log(rec1.getDetails());

console.log("พื้นที่ :" + rec1.getArea() + " ตร.ซม.");
console.log("เส้นรอบวง :" + rec1.getPerimeter() + " ตร.ซม.");
console.log(`สีสี่เหลื่ยมผืนผ้า:${rec1.getColor()}`);

console.log("############ Circle #############");
const cir1 = new Circle(10);
console.log(cir1.getDetails());
console.log(`พื้นที่วงกลม: ${cir1.getArea()} ตร.ซม.`);
console.log(`เส้นรอบวง: ${cir1.getPerimeter()} ตร.ซม.`);
rec1.setColor("blue")
console.log(`สีวงกลม:${rec1.getColor()}`);

console.log("############ Dog #############");
const dog1 = new Dog("J");
dog1.makeSound();


console.log("############ Cat #############");
const cat1 = new Cat("BL");
cat1.makeSound();


console.log("############ TV #############");
const TV1 = new Tv
TV1.turnOff();
TV1.turnOn();


console.log("############ Radio #############");
const Radio1 = new Radio
Radio1.turnOff();
Radio1.turnOn();


console.log("############ CreditCardPayment #############");
const Card1 = new CreditCardPayment("31245",5000)
Card1.pay("31245",100)


console.log("############ Motorcycle #############");
const Motor1 = new Motorcycle("Honda")
Motor1.startEngin();
Motor1.fly();
Motor1.stopEngin();

console.log("############ Car #############");
const Car1 = new Car("Honda")
Car1.chargeBattery();
Car1.startEngin();
Car1.stopEngin();