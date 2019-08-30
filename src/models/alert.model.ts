import { BaseModel } from "./base.model";
import {Type} from "./type.model";

export class Alert extends BaseModel {
    Percentage: number;
    Type: Type;
    Value: number;
    constructor(props: any) {
        super();
        this.Percentage = props.percentage;
        this.Type = props.type;
        this.Value = props.value;
    }
}