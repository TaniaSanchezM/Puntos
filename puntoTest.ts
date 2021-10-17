import { Punto } from './punto';

let punto1 = new Punto (3,2);
console.log(punto1)
console.log(punto1.toString())

console.log(punto1.distanciaAlOrigen());

let punto2 = new Punto (5,6);
console.log(punto1.calcularDistancia(punto2));

console.log(punto1.calcularCuadrante());

let punto3 = new Punto (-2,1);
let punto4 = new Punto (-4,-4);
let punto5 = new Punto (2,-1);
let puntos = [punto2, punto3, punto4, punto5]

console.log(punto1.calcularMasCercano(puntos))  