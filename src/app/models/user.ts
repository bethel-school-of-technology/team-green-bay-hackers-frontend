export class User {
    userId?: number;
    username?: string;
    email?: string;
    password?: string;

    constructor (id?: number, username?: string, email?: string, password?: string) {
        this.userId = id;
        this.username = username;
        this.email = email;
        this.password = password
    }
}
