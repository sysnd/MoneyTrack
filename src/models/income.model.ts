import { BaseModel } from "./base.model";
import { Type } from "./type.model";

export class Income extends BaseModel{
    Type: Type;
    Value: number;
    constructor(props: any) {
        super();
        this.Type = props.type;
        this.Value = props.value;
    }    
}