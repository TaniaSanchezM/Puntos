import { Punto } from "./punto";
import { Triangulo } from "./triangulo";

let punto3 = new Punto (-2,1);
let punto4 = new Punto (-4,-4);
let punto5 = new Punto (2,-1);

let miTriang = new Triangulo (punto3, punto4, punto5)
console.log(miTriang.calcularLongitudLados())