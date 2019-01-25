function Car() {}

Car.prototype.setType = function(type) {
  this.type = type;
  return this;
}
Car.prototype.setColor = function(color) {
  this.color = color;
  return this;
}

Car.prototype.setSeatsColor = function(color) {
  this.seatsColor = color;
  return this;
}

Car.prototype.setHandleMaterial = function(material) {
  this.handleMaterial = material;
  return this;
}

Car.prototype.setDoors = function(number) {
  this.doors = number;
  return this;
}

Car.prototype.setColor = function(color) {
  this.color = color;
  return this;
}

Car.prototype.setSeatsColor = function(color) {
  this.seatsColor = color;
  return this;
}

Car.prototype.setHandleMaterial = function(material) {
  this.handleMaterial = material;
  return this;
}

Car.prototype.setDoors = function(number) {
  this.doors = number;
  return this;
}

function LuxuryCarBuilder() {
  this.car = new Car();
  this.car.setType("luxury");
}

LuxuryCarBuilder.prototype.buildColor = function(color) {
  this.car.setColor(color)
  return this;
}

LuxuryCarBuilder.prototype.buildSeatsColor = function(color) {
  this.car.setSeatsColor(color)
  return this;
}

LuxuryCarBuilder.prototype.buildHandle = function(material) {
  this.car.setHandleMaterial("Diamond");
  return this;
}

LuxuryCarBuilder.prototype.buildDoors = function(number) {
  this.car.setDoors(8);
  return this;
}

LuxuryCarBuilder.prototype.getCar = function(number) {
  return this.car;
}

function BasicCarBuilder() {
  this.car = new Car();
  this.car.setType("basic");
}

BasicCarBuilder.prototype.buildColor = function(color) {
  this.car.setColor(color);
  return this;
}

BasicCarBuilder.prototype.buildSeatsColor = function(color) {
  this.car.setSeatsColor(color);
  return this;
}

BasicCarBuilder.prototype.buildHandle = function(material) {
  this.car.setHandleMaterial("Laser");
  return this;
}

BasicCarBuilder.prototype.buildDoors = function(number) {
  this.car.setDoors(4);
  return this;
}

BasicCarBuilder.prototype.getCar = function(number) {
  return this.car;
}

function Maker(builder) {
  this.builder = builder;
}

Maker.prototype.getCar = function(color, seatColor) {
  return this.builder.getCar();
}

Maker.prototype.buildCar = function(color, seatColor) {
  this.builder
  .buildColor(color)
  .buildSeatsColor(seatColor)
  .buildHandle()
  .buildDoors()
}

module.exports = {
  BasicCarBuilder,
  LuxuryCarBuilder,
  Maker
}