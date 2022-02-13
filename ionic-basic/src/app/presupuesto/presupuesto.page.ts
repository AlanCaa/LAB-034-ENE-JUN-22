import { Component, OnInit } from '@angular/core';
import { Gasto } from '../models/gastos.model';
import { GastosService } from '../services/gastos.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
})
export class PresupuestoPage implements OnInit {

  
  public gastos: string[]=['Directos','Fijos', 'Variables'];
  public selectedValue: any;
  public monto: number;
  public gasotsList: Gasto[]=[];
  public resultados: string;
  public descripcion: string;
  public errResultados: string='light';

  constructor(private gastosService: GastosService) { }

  ngOnInit() {
  }

  cambioValor(value){
    console.log(value);
  }

  guardar(){
    this.resultados ="";
    if(this.monto!=null && this.selectedValue!=null && this.descripcion!= null){
      this.errResultados = 'success';
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