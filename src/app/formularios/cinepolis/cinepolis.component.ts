import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre: string = '';
  compradores: number = 0;
  boletos: string = '';
  valorapagar: number = 0;
  sitiene: string = '';
  

  

  cuenta(): void {
    const precioBoleto = 12;
    const cantidad = Number(this.boletos);


    let valorapagar = precioBoleto * cantidad;
    

    
    if (cantidad <= (this.compradores *7)){
    }else{alert("NOSEPUEDE")}

    if (cantidad > 5) {
      valorapagar -= valorapagar * 0.15; 
    } else if (cantidad >= 3) {
      valorapagar -= valorapagar * 0.10;
    }

    this.valorapagar = this.compradores* valorapagar /this.compradores;

    
    if (this.sitiene === 'si') {
      valorapagar -= valorapagar * 0.10;
    }
    this.valorapagar = this.compradores* valorapagar /this.compradores ;


    
  }

  cero(): void {
    this.nombre = '';
    this.compradores = 0;
    this.boletos = '';
    this.valorapagar = 0;
    this.sitiene = '';
  }
}
