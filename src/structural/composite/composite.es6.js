function DataEntry(name) {
    this.name = name;
}
DataEntry.prototype.remove = function () {
    console.log("Delete: " + this.name);
};
DataEntry.prototype.getInfo = function () { };
class Folder {
}
function Folder(name) {
    DataEntry.call(this, name);
    this.sub = [];
}
Folder.prototype = Object.create(DataEntry.prototype);
Folder.prototype.add = function (data) {
    this.sub.push(data);
};
Folder.prototype.remove = function () {
    DataEntry.prototype.remove.call(this);
    Array.prototype.forEach.call(this.sub, function (data) {
        data.remove();
    });
};
function File(name) {
    DataEntry.call(this, name);
}
File.prototype = Object.create(DataEntry.prototype);
File.prototype.remove = function () {
    DataEntry.prototype.remove.call(this);
};
module.exports = {
    File,
    Folder
};
