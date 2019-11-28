class Authentication {
    constructor() {
        this.authenticated = false;
    }

    login(userName, password, cb) {
        if(userName === 'gui.zorzon@usp.br' && password === 'labsoft1') {
            this.authenticated = true;
        }
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Authentication();