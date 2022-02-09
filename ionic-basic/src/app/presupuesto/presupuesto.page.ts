import { Component, OnInit } from '@angular/core';
import { Gasto } from '../models/gastos.model';
import { GastosService } from '../services/gastos.service';

@Component({
  selector: 'app-presupuesto',
@@ -11,10 +13,12 @@ export class PresupuestoPage implements OnInit {
  public gastos: string[]=['Directos','Fijos', 'Variables'];
  public selectedValue: any;
  public monto: number;
  public gasotsList: Gasto[]=[];
  public resultados: string;
  public descripcion: string;
  public errResultados: string='light';

  constructor() { }
  constructor(private gastosService: GastosService) { }

  ngOnInit() {
  }
  customPopoverOptions: any = {
    header: 'Seleccion de gasots',
    subHeader: 'Seleccione el tipo de gasto',
    message: 'Solo seleccione un tipo de gasto'
  };
  cambioValor(value){
    console.log(value);
  }

  guardar(){
    this.resultados ="";
    if(this.monto!=null && this.selectedValue!=null){
    if(this.monto!=null && this.selectedValue!=null && this.descripcion!= null){
      this.errResultados = 'success';
      this.resultados = 'Gasto seleccionado: '+this.selectedValue+' \nMonto: '+this.monto+'\n';
      this.resultados = 'Gasto seleccionado: '+this.selectedValue+' \nMonto: '+this.monto+'\n'+
      'Descricion: '+this.descripcion;
      let gasto: Gasto = {
      descripcion: this.descripcion,
      tipo: this.selectedValue,
      monto: this.monto
    }
      this.gastosService.agregar(gasto);
      this.gasotsList = this.gastosService.getGastos();
    }
    else{
      this.errResultados = 'danger';
      this.resultados ="No a completado los campos del formulario";
    }
  }  
  }

  borrarGasto(idGasto: number){
    this.gastosService.borrarGasto(idGasto);
    this.gasotsList = this.gastosService.getGastos();
  }

}