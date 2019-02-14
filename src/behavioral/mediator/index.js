import { User, Chatroom } from './mediator.es6';
(function main() {
    const chatroom = new Chatroom();
    const user1 = new User('Kei', chatroom);
    const user2 = new User('Oka', chatroom);
    user1.send('hi');
    user2.send('helllo');
    user1.send('how is it going');
})();
