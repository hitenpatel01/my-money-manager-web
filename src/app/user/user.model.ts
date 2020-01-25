export class User {
    readonly userName: string;
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    constructor(userName: string, firstName: string, lastName: string, email: string) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
