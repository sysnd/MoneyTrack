import { BaseModel } from "./base.model";

export default class Category extends BaseModel {
    Name:string;
    constructor(props:any) {
        super();
        this.Name=props.name;
    }
}