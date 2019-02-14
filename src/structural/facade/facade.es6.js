class Auth {
    login() {
        console.log('login success...');
        return 'some-id';
    }
}
class Session {
    set(id) {
        console.log('Session started...');
    }
}
class Navigation {
    redirect(id) {
        console.log('Redirect to /user/' + id + ' ...');
    }
}
export class Facade {
    constructor() {
        this.auth = new Auth();
        this.session = new Session();
        this.navigation = new Navigation();
    }
    login() {
        const id = this.auth.login();
        if (id) {
            this.session.set(id);
        }
        this.navigation.redirect(id);
    }
}
