import { BaseModel } from "./base.model";

export class Type extends BaseModel{
    Name: string;
    constructor(Name:string){
        super();
        this.Name=Name;
    }
}