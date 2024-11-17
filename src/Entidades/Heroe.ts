export class Heroes {
    Codigo: number;
    Nombre: string;
    Edad: number;
    Ciudad: string;
    Imagen: string;

    constructor(cod: number, nom: string, edad: number, ciudad: string, imagen: string) {
        this.Codigo = cod;
        this.Nombre = nom;
        this.Edad = edad;
        this.Ciudad = ciudad;
        this.Imagen = imagen;
}
}