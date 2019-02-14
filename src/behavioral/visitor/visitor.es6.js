export class ServerA {
    connect() {
        console.log('connect to the server A');
    }
    accept(visitor) {
        visitor.visitServerA(this);
    }
}
export class ServerB {
    accessToThisServer() {
        console.log('connect to the server B');
    }
    accept(visitor) {
        visitor.visitServerB(this);
    }
}
export class ServerC {
    lunchServer() {
        console.log('connect to the server C');
    }
    accept(visitor) {
        visitor.visitServerC(this);
    }
}
export class WebClinet {
    visitServerA(server) {
        server.connect();
    }
    visitServerB(server) {
        server.accessToThisServer();
    }
    visitServerC(server) {
        server.lunchServer();
    }
}
