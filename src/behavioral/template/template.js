const apiRequest = (url, type) => {
    return new Promise((resolve, reject) => {
        let response;
        switch (type) {
            case "Facebook": {
                response = {
                    data: {
                        user: {
                            type: "facebook",
                            id: "0000",
                            firstName: "Kei",
                            lastName: "Oka"
                        }
                    }
                };
                break;
            }
            case "Twitter": {
                response = {
                    user: {
                        type: "twitter",
                        id: "0000",
                        firstName: "Kei",
                        lastName: "Oka"
                    }
                };
                break;
            }
            default: {
                response = null;
            }
        }
        resolve(response);
    });
};
class Auth {
    constructor(url, type) {
        this.url = url;
        this.type = type;
    }
    connect() {
        return apiRequest(this.url, this.type);
    }
    get() {
        return this.getUserFromAuth();
    }
}
class FacebookAuth extends Auth {
    constructor() {
        super("https://auth.facebook.com", "Facebook");
    }
    getUserFromAuth() {
        return this.connect().then((response) => response.data.user);
    }
    ;
}
class TwitterAuth extends Auth {
    constructor() {
        super('https://auth.twitter.com', "Twitter");
    }
    getUserFromAuth() {
        return this.connect().then((response) => response.user);
    }
}
module.exports = {
    TwitterAuth,
    FacebookAuth
};
