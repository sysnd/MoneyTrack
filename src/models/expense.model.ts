import Category from "./category.model";
import { BaseModel } from "./base.model";

export default class Expense extends BaseModel{
    Name:string;
    Category: Category;
    Date: Date;
    Value: number;
    constructor(props:any){
        super();
        this.Name=props.name;
        this.Category=props.category;
        this.Date=props.date;
        this.Value=props.value;
    }
}