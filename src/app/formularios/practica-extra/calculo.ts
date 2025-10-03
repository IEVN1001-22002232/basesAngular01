
export class Distancia {
    X1: number;
    Y1: number;
    X2: number;
    Y2: number;
  
    constructor(X1: number, Y1: number, X2: number, Y2: number) {
      this.X1 = X1;
      this.Y1 = Y1;
      this.X2 = X2;
      this.Y2 = Y2;
    }
  
    formulageneral(): number {
      const dx = this.X2 - this.X1;
      const dy = this.Y2 - this.Y1;
      const distancia = Math.sqrt(dx * dx + dy * dy);
      return parseFloat(distancia.toFixed(2));
    }
  }