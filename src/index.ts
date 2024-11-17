import { Listar, Insertar, Editar, Eliminar } from "./Controlador/TLista";

Listar();

const modal = document.getElementById("container-form")!;
const tabla = document.getElementById("tabla-H")!;
const btnAdd = document.getElementById("btn-add")!;
const btnSave = document.getElementById("btn")!;
let editId = 0;

btnAdd.addEventListener("click", () => {
    modal.classList.add("active");
    limpiar();
});

btnSave.addEventListener("click", (e: Event) => {
    e.preventDefault();
    if (editId) {
        Editar(editId);
    } else {
        Insertar();
    }
    modal.classList.remove("active");
    limpiar();
});

tabla.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("editar")) {
        modal.classList.add("active");
        const fila = target.parentElement!.parentElement as HTMLTableRowElement;
        editId = Number(fila.children[0].textContent);
        (<HTMLInputElement>document.getElementById("codigo")).value = fila.children[0].textContent!;
        (<HTMLInputElement>document.getElementById("nombre")).value = fila.children[1].textContent!;
        (<HTMLInputElement>document.getElementById("edad")).value = fila.children[2].textContent!;
        (<HTMLInputElement>document.getElementById("ciudad")).value = fila.children[3].textContent!;
        const imagenUrl = (fila.children[4].querySelector('img') as HTMLImageElement).src;
        (<HTMLInputElement>document.getElementById("imagen")).value = imagenUrl;  
    }

    if (target.classList.contains("eliminar")) {
        const fila = target.parentElement!.parentElement as HTMLTableRowElement;
        Eliminar(Number(fila.children[0].textContent));
    }
});


function limpiar() {
    (<HTMLInputElement>document.getElementById("codigo")).value = '';
    (<HTMLInputElement>document.getElementById("nombre")).value = '';
    (<HTMLInputElement>document.getElementById("edad")).value = '';
    (<HTMLInputElement>document.getElementById("ciudad")).value = '';
    (<HTMLInputElement>document.getElementById("imagen")).value = '';  
}

const closeModalButton = document.getElementById("close-modal")!;

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("active");
});
