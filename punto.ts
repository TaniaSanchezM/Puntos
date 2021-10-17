export class Punto{
    private x:number;
    private y:number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y
    }
    // Métodos getters
    public getX():number{
        return this.x
    }
    public getY():number{ 
        return this.y
    }
    // Métodos setters
    public setX(x:number):void{
        this.x = x;
    }
    public setY(x:number):void{
        this.y = this.y;
    }
    // Otros métodos
    public toString():string{

        return "(" + this.x.toString() + "," +this.y.toString() + ")"
    }
    public distanciaAlOrigen():number{

        return Math.sqrt(Math.pow(this.x,2) + (Math.pow(this.y,2)))
    } 
    public calcularDistancia(otroPunto:Punto):number{
        return Math.sqrt(Math.pow((otroPunto.x - this.x),2) + (Math.pow((otroPunto.y - this.y),2)))
    }
    public calcularCuadrante():number{
        let cuadrante:number = 0;
        if ((this.x == 0) || (this.y == 0)){
            cuadrante = 0
        }
        else if ((this.x > 0) && (this.y > 0)){
            cuadrante = 1
        }
        else if ((this.x < 0) && (this.y > 0)){
            cuadrante = 2
        }
        else if ((this.x < 0) && (this.y < 0)){
            cuadrante = 3
        }
        else{
            cuadrante = 4
        }
        return cuadrante
    }
    public calcularMasCercano(puntos:Punto[]):Punto{
        let distanciaMasCerca: number = this.calcularDistancia(puntos[0])
        let puntoMasCercano: Punto = puntos[0];
        for (let i = 1; i < puntos.length; i++){
            let distancia: number
            distancia = this.calcularDistancia(puntos[i])
            if (distancia < distanciaMasCerca){
                distanciaMasCerca = distancia
                puntoMasCercano = puntos[i]
            }
        }
        return puntoMasCercano 
    }
}
