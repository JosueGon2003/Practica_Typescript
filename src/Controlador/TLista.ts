import { Heroes } from "../Entidades/Heroe";

export let ListaHeroes: Heroes[] = [
    { Codigo: 1, 
        Nombre: "Batman", 
        Edad: 40, 
        Ciudad: "Gótica", 
        Imagen: "https://media.gamestop.com/i/gamestop/20000900_ALT06/McFarlane-Toys-DC-Multiverse-Batman-Arkham-City-Batman-7-in-Action-Figure?fmt=auto" },
    { Codigo: 2, 
        Nombre: "Spiderman", 
        Edad: 20, 
        Ciudad: "New York", 
        Imagen: "https://th.bing.com/th/id/R.2b8d34ab9bca22a40317221b991d29ac?rik=PevV9J8n7nd9rg&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f34700000%2fSpidrman-spider-man-34793159-1400-1400.jpg&ehk=LtHdhwOp7fXatFaSxtERGRRQK%2fvf05zfZMyrtIX%2bXFM%3d&risl=&pid=ImgRaw&r=0" },
    { Codigo: 3, 
        Nombre: "Superman", 
        Edad: 35, 
        Ciudad: "Metropolis", 
        Imagen: "https://th.bing.com/th/id/R.2748e08606743d2c7b770f488c2c88d5?rik=zDnJ0qFGgvttaA&pid=ImgRaw&r=0" }
];

// Insertar héroe
export function Insertar() {
    const cod = Number((<HTMLInputElement>document.getElementById("codigo")).value);
    const nom = (<HTMLInputElement>document.getElementById("nombre")).value;
    const eda = Number((<HTMLInputElement>document.getElementById("edad")).value);
    const ciu = (<HTMLInputElement>document.getElementById("ciudad")).value;
    const imagen = (<HTMLInputElement>document.getElementById("imagen")).value;  
    const nuevoHeroe = new Heroes(cod, nom, eda, ciu, imagen);
    ListaHeroes.push(nuevoHeroe);
    Listar();
}

// Editar héroe
export function Editar(codigo: number) {
    const cod = Number((<HTMLInputElement>document.getElementById("codigo")).value);
    const nom = (<HTMLInputElement>document.getElementById("nombre")).value;
    const eda = Number((<HTMLInputElement>document.getElementById("edad")).value);
    const ciu = (<HTMLInputElement>document.getElementById("ciudad")).value;
    const imagen = (<HTMLInputElement>document.getElementById("imagen")).value;  
    const index = ListaHeroes.findIndex(heroe => heroe.Codigo === codigo);
    if (index !== -1) {
        ListaHeroes[index] = new Heroes(cod, nom, eda, ciu, imagen);  
    }
    Listar();
}

// Eliminar héroe
export function Eliminar(codigo: number) {
    const index = ListaHeroes.findIndex(heroe => heroe.Codigo === codigo);
    if (index !== -1) {
        ListaHeroes.splice(index, 1);
    }
    Listar();
}

// Listar héroes
export function Listar() {
    let tabla = document.getElementById("tabla-H") as HTMLTableElement;
    tabla.innerHTML = "";
    ListaHeroes.forEach(heroe => {
        let fila = tabla.insertRow();
        fila.innerHTML = `
            <td>${heroe.Codigo}</td>
            <td>${heroe.Nombre}</td>
            <td>${heroe.Edad}</td>
            <td>${heroe.Ciudad}</td>
            <td><img src="${heroe.Imagen}" alt="Imagen de ${heroe.Nombre}" style="width: 50px; height: 50px; object-fit: cover;"></td>
            <td>
                <button class="editar">Editar</button>
                <button class="eliminar">Eliminar</button>
            </td>
        `;
    });
}
