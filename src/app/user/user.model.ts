export class User {
    readonly userName: string;
    readonly email: string;
    constructor(userName: string, email: string) {
        this.userName = userName;
        this.email = email;
    }
}
