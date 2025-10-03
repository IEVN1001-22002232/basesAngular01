import { Component } from '@angular/core';
import { Operaciones } from './operacionesbasicas';

@Component({
  selector: 'app-resistencia',
  standalone: false,
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  uno: number = 0;
  dos: number = 0;
  tres: number = 1;
  TOLERANCIA: number = 5;

  resultado: any = null;

  operaciones = new Operaciones();

  calculo() {
    this.resultado = this.operaciones.calcular(
      this.uno,
      this.dos,
      this.tres,
      this.TOLERANCIA
    );
  }
}