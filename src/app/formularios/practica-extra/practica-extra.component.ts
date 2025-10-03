import { Component } from '@angular/core';
import { Distancia } from './calculo';

@Component({
  selector: 'app-practica-extra',
  standalone: false,
  templateUrl: './practica-extra.component.html',
  styleUrl: './practica-extra.component.css'
})
export class PracticaExtraComponent {

  X1: number = 0;
  Y1: number = 0;
  X2: number = 0;
  Y2: number = 0;
  DIST: number | null = null;

  calcularDistancia(): void {
    const puntos = new Distancia(this.X1, this.Y1, this.X2, this.Y2);
    this.DIST = puntos.formulageneral();
  }
}

