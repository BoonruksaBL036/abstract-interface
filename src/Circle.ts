import { Color } from "./Color";
import { Shape } from "./Shape";
export class Circle extends Color implements Shape {
    constructor(private radius:number){
        super("blue",false)
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
        return Math.PI * Math.pow(this.radius,2)
    }

    getPerimeter(): number {
        return 2 * (Math.PI * this.radius)
    }
    getDetails():string{
        return `รูปวงกลมขนาด ${this.radius} ซม.`
    }
}