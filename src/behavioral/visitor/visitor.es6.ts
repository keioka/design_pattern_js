interface IVisitee {
  accept: (visitor: IVisitor) => void;
}

interface IVisitor {
  visitServerA: (visitee: IVisitee) => void;
  visitServerB: (visitee: IVisitee) => void;

  visitServerC: (visitee: IVisitee) => void;
}

export class ServerA implements IVisitee {
  connect(): void {
    console.log('connect to the server A');
  }
  accept(visitor): void {
    visitor.visitServerA(this);
  }
}

export class ServerB implements IVisitee {
  accessToThisServer(): void {
    console.log('connect to the server B');
  }
  accept(visitor): void {
    visitor.visitServerB(this);
  }
}

export class ServerC implements IVisitee {
  lunchServer(): void {
    console.log('connect to the server C');
  }
  accept(visitor): void {
    visitor.visitServerC(this);
  }
}

export class WebClinet implements IVisitor {
  visitServerA(server): void {
    server.connect();
  }
  visitServerB(server): void {
    server.accessToThisServer();
  }

  visitServerC(server): void {
    server.lunchServer();
  }
}
