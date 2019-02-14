const { TwitterAuth, FacebookAuth } = require('./template');
function getAuthUser(type) {
    let user;
    switch (type) {
        case 'twitter': {
            user = new TwitterAuth().get();
            break;
        }
        case 'facebook': {
            user = new FacebookAuth().get();
            break;
        }
        default: {
            user = null;
        }
    }
    return user;
}
(function main() {
    const user1 = getAuthUser('twitter').then(user => console.log(user));
    const user2 = getAuthUser('facebook').then(user => console.log(user));
})();
