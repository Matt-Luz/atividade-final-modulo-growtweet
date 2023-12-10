import { randomUUID } from "crypto";

class User {
    private _id: string

    constructor() {
        this._id = randomUUID()
    }
}