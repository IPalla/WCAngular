import { OrderPrintIf } from './ordenprint.model';
export class Printers {
  constructor(public id: string, public name: string) {}
}

export class Printers2 {
  public id: string;
  public name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
export interface PrinterIf {
  id: string;
  name: string;
}

export interface DptoIf {
  id: string;
  name: string;
}

export class Printer implements PrinterIf {
  constructor(public id: string, public name: string) {}
}
