 interface DataEntry {
  name: string;
  remove: () => void;
  getInfo: () => void;
}

function DataEntry(name: string) {
  this.name = name;
}

DataEntry.prototype.remove = function(): void {
  console.log("Delete: " + this.name);
}

DataEntry.prototype.getInfo = function(): void {}

abstract class Folder {
  name: string;
  sub: DataEntry[];
}

function Folder(name: string) {
  DataEntry.call(this, name)
  this.sub = [];
}

Folder.prototype = Object.create(DataEntry.prototype)

Folder.prototype.add = function(data: DataEntry): void {
  this.sub.push(data);
}

Folder.prototype.remove = function(): void {
  DataEntry.prototype.remove.call(this)
  Array.prototype.forEach.call(this.sub, function(data: DataEntry) {
    data.remove();
  });
}

function File(name: string) {
  DataEntry.call(this, name)
}

File.prototype = Object.create(DataEntry.prototype)

File.prototype.remove = function() {
  DataEntry.prototype.remove.call(this)
}

module.exports = {
  File,
  Folder
}