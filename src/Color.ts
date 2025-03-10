export abstract class Color {
    protected color : string;
    protected filed : boolean;

    constructor(color:string,filed:boolean){
        this.color = color
        this.filed = filed
    }

    abstract getColor():string
    abstract setColor(color:string):void
    abstract isFiled():boolean
    abstract setFiled(filed:boolean):void
}