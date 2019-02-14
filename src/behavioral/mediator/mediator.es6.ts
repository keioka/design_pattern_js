interface IChatroomMediator {
  showMessage: (name: string, message: string) => void;
}

export class Chatroom implements IChatroomMediator {
  showMessage(name: string, message: string) {
    console.log(`[${name}]: ${message}`);
  }
}

interface IUser {
  name: string;
  chatroom: Chatroom;
  getName: () => string;

  send: (message: string) => void;
}
export class User implements IUser {
  name: string;
  chatroom: Chatroom;
  constructor(name: string, chatroom: Chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }
  getName(): string {
    return this.name;
  }
  send(message: string): void {
    this.chatroom.showMessage(this.name, message);
  }
}
