import { PrinterIf, DptoIf } from './master.model';

export interface OrderPrintIf {
  user: UserIf;
  printer: PrinterIf;
  isColor: boolean;
  isClaro: boolean;
  dpto: DptoIf;
}

interface UserIf {
  nombre: string;
  apellidos: string;
  telefono: string;
}
