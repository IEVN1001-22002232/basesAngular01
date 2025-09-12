import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ASTRID ARLET';

  duplicarNumero(valor:number):number{
    return valor*2;
  }

  pelicula={
    titulo:"SI TUVIERA 100",
    ANIO: 2002,
    GENERO: "ROMANTICA"
  }
}
