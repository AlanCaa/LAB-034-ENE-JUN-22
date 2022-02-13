import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-datos-alumno',
  templateUrl: './datos-alumno.component.html',
  styleUrls: ['./datos-alumno.component.scss'],
})
export class DatosAlumnoComponent implements OnInit {

  @Input() alumnosList:Alumno[];
  @Output() eliminar: any = new EventEmitter<Alumno[]>();
  @Output() editar:  any = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {}

}
