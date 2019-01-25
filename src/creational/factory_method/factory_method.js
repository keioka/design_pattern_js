const redirect = (url) => { console.log(`Redirecting to ... ${url}`); };
class Device {
    constructor(downloadUrl, { deviceId, color }) {
        this.downloadUrl = `${downloadUrl}&deviceId=${deviceId}`;
        this.deviceId = deviceId;
        this.color = color;
    }
    sendToDownLoadPage() {
        redirect(this.downloadUrl);
    }
    getInfo() {
        return this;
    }
}
class DeviceIphone extends Device {
    constructor(options) {
        super("appstore.com/dsfa", options);
    }
}
class DeviceAndroid extends Device {
    constructor(options) {
        super("playstore.com/dsfa", options);
    }
}
function DeviceFactory() { }
DeviceFactory.prototype.phoneClass = DeviceIphone;
DeviceFactory.prototype.createPhone = function (options) {
    if (options.type === "iphone") {
        this.phoneClass = DeviceIphone;
    }
    else {
        this.phoneClass = DeviceAndroid;
    }
    return new this.phoneClass(options);
};
module.exports = DeviceFactory;
