export class FirebaseConnectToDbException extends Error {
    constructor() {
        super();
        this.message = 'Failed to get connection to db!';
    }
}

export class ApiException extends Error {
    constructor() {
        super();
        this.message = 'Failed to retrieve data over network!';
    }
}
