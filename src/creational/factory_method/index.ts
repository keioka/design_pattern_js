import { DeviceFactory } from './factory_method.es6';

(function main(): void {
  const factory = new DeviceFactory();
  const phone1 = factory.createPhone({ type: 'iphone', deviceId: 'dads4428ds27ddsa', color: 'black' });
  const phone2 = factory.createPhone({ type: 'android', deviceId: 'llkdsads4s9ds217ddsa', color: 'red' });

  phone1.sendToDownLoadPage();
  phone2.sendToDownLoadPage();

  console.log(phone1.getInfo());
  console.log(phone2.getInfo());
})();
