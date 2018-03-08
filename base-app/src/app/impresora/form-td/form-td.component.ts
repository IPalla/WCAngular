import { OnInit, Component } from '@angular/core';
import { PrinterIf, Printers, DptoIf } from '../../modelos/master.model';
import { aImpresoras, aDptos } from '../../modelos/master.data';
import { OrderPrintIf } from '../../modelos/ordenprint.model';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  aPrinters: Array<PrinterIf>;
  aDptos: Array<DptoIf>;
  orderPrint: OrderPrintIf;
  constructor() { }

  ngOnInit() {
    this.aPrinters = aImpresoras;
    this.aDptos = aDptos;
    this.orderPrint = {
      user: { nombre: '', apellidos: '', telefono: ''},
      printer: {id: '', name: ''},
      isColor: false,
      isClaro: false,
      dpto: {id: '', name: ''}
    }
  }

}
