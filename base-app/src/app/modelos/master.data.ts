import { PrinterIf, DptoIf, Printer } from './master.model';

export const aImpresoras: Array<PrinterIf> = [
  {id: '1', name: 'HP'},
  new Printer('2', 'Canon'),

];
export const aDptos: Array<DptoIf> = [
  {id: '1', name: 'Ventas'},
  {id: '2', name: 'Marketing'},
  {id: '3', name: 'RRHH'},
  {id: '4', name: 'Sistemas'}
];
