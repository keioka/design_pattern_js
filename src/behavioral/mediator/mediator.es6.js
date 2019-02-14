export class Chatroom {
    showMessage(name, message) {
        console.log(`[${name}]: ${message}`);
    }
}
export class User {
    constructor(name, chatroom) {
        this.name = name;
        this.chatroom = chatroom;
    }
    getName() {
        return this.name;
    }
    send(message) {
        this.chatroom.showMessage(this.name, message);
    }
}
