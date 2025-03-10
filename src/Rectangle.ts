import { Color } from "./Color";
import { Shape } from "./Shape";
export class Rectangle extends Color implements Shape{
    constructor(private width:number,private height:number){
        super("red",false)
    }

    getColor(): string {
        return this.color
    }

    setColor(color: string): void {
        this.color = color
    }

    isFiled(): boolean {
        return this.filed
    }

    setFiled(filed: boolean): void {
        this.filed = filed
    }

    getArea(): number {
        return this.width * this.height
    }

    getPerimeter(): number {
        return (this.width + this.height) * 2;
    }
    getDetails():string{
        return `รูปสี่เหลี่ยมผืนผ้าขนาด ${this.width} x ${this.height} ซม.`
    }
}