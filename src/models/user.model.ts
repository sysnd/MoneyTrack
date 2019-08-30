import { BaseModel } from "./base.model";

export class User extends BaseModel{
    Name: string;
    Email: string;
    Password: string;
    Photo?: string;
    constructor(props:any) {
        super();
        this.Name = props.name;
        this.Email = props.email;
        this.Password = props.password;
        this.Photo = props.photo;
    }
}