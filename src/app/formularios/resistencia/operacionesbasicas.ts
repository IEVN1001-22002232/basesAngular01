export class Operaciones {
  colores = [
    { nombre: "0-Negro", css: "black" },
    { nombre: "1-Cafecito", css: "brown" },
    { nombre: "2-Rojito", css: "red" },
    { nombre: "3-Naranja", css: "orange" },
    { nombre: "4-Amaillo", css: "yellow" },
    { nombre: "5-Verdecin", css: "green" },
    { nombre: "6-Azulado", css: "blue" },
    { nombre: "7-Moradito", css: "purple" },
    { nombre: "8-Gris", css: "gray" },
    { nombre: "9-Blanquillo", css: "white" }
  ];

  multiplicadores = [
    { valor: 1, color: "Negro", css: "black" },
    { valor: 10, color: "Cafe", css: "brown" },
    { valor: 100, color: "Rojo", css: "red" },
    { valor: 1000, color: "Naranja", css: "orange" },
    { valor: 10000, color: "Amarillo", css: "yellow" },
    { valor: 100000, color: "Verde", css: "green" },
    { valor: 1000000, color: "Azul", css: "blue" },
    { valor: 10000000, color: "Morado", css: "purple" },
    { valor: 100000000, color: "Gris", css: "gray" },
    { valor: 1000000000, color: "Blanco", css: "white" }
  ];

  calcular(b1: number, b2: number, b3: number, tol: number) {
    const base = Number(`${b1}${b2}`);
    const mult = this.multiplicadores.find(m => m.valor === b3);

    const valor = base * (mult ? mult.valor : 1);
    const valorMax = valor + (valor * tol) / 100;
    const valorMin = valor - (valor * tol) / 100;

    const color1 = this.colores[b1];
    const color2 = this.colores[b2];
    const color3 = mult ? { nombre: mult.color, css: mult.css } : { nombre: "", css: "" };
    const colorTol = tol === 5
      ? { nombre: "Dorado 5%", css: "gold" }
      : { nombre: "Plata 10%", css: "silver" };

    return {
      valor,
      valorMax,
      valorMin,
      color1Nombre: color1.nombre,
      color1Css: color1.css,
      color2Nombre: color2.nombre,
      color2Css: color2.css,
      color3Nombre: color3.nombre,
      color3Css: color3.css,
      colorTolNombre: colorTol.nombre,
      colorTolCss: colorTol.css
    };
  }
}