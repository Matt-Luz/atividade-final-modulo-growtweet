import { randomUUID } from "crypto";
import { users } from "../Database/users";

 export class User {
    private _id: string

    constructor(
        private name: string, 
        private email: string, 
        private _username: string, 
        private password: string
    ) {
        this._id = randomUUID()

        if (users.find((user) => user.username === this.username)) {
            throw new Error("already registered username")
        }
    }

    get id(): string {
        return this._id
    }

    get username(): string {
        return this._username
    }
}