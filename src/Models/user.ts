import { randomUUID } from "crypto";
import { users } from "../Database/users";

 export class User {
    private _id: string

    constructor(private name: string, private email: string, private username: string, private password: string) {
        this._id = randomUUID()
    }
}