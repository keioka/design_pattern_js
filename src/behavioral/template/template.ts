const apiRequest = (url: string, type: string) => {
    return new Promise((resolve, reject) => {
        let response: any;
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
}

interface Auth {
    url: string,
    type: string
}

class Auth {
    constructor(url: string, type: string) {
        this.url = url
        this.type = type
    }

    connect(): promise {
        return apiRequest(this.url, this.type);
    }

    get() {
        return this.getUserFromAuth()
    }
}

class FacebookAuth extends Auth {
    constructor() {
        super("https://auth.facebook.com", "Facebook");
    }

    getUserFromAuth() {
        return this.connect().then((response: object): object => response.data.user)
    };
}

class TwitterAuth extends Auth {
    constructor() {
        super('https://auth.twitter.com', "Twitter")
    }

    getUserFromAuth() {
        return this.connect().then((response: obejct): object => response.user)
    }
}

module.exports = {
    TwitterAuth,
    FacebookAuth
}